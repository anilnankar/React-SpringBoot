import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlankCenterDiv from '../components/comment/blankCenterDiv';
import ImagePreview from '../components/comment/imagePreview';
import AllComments from '../components/comment/allComments';
import actions from '../redux/actions';
import styles from '../styles';

const {
  setDimensions,
  editImage,
  deleteImage,
  setNewPoint,
  setSelectedPoint,
  toggleOptions
} = actions;
const style = styles.SelectedImage;

class SelectedImage extends Component {
  render() {
    const {
      dimensions,
      selectedImage,
      notSelected,
      points,
      selectedPoint,
      newPoint,
      showPoints,
      setDimensions,
      setNewPoint,
      setSelectedPoint
    } = this.props;
    if (notSelected) {
      return <BlankCenterDiv text={notSelected} />;
    }
    const imagePreViewProps = {
      dimensions,
      selectedImage,
      points,
      selectedPoint,
      newPoint,
      showPoints,
      setDimensions,
      setNewPoint,
      setSelectedPoint
    };
    const paddingLeft = `${Math.round(
      (window.innerWidth - dimensions.width) / 2
    )}px`;
    return (
      <div
        style={style.main}
        onClick={event => {
          event.stopPropagation();
          setSelectedPoint(null);
        }}
      >
        <div style={style.imageBody}>
          <div
            style={{
              height: dimensions.height,
              ...style.imageWrapper,
              paddingLeft
            }}
          >
            <ImagePreview {...imagePreViewProps} />
          </div>
        </div>
        <AllComments />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    dimensions,
    images,
    selectedImage,
    points,
    selectedPoint,
    newPoint,
    showPoints,
    showAllComments
  } = state.reducers;
  if (images.length === 0) {
    return {
      notSelected: 'Please  upload a new Image'
    };
  }
  if (!selectedImage) {
    return {
      notSelected: 'Please Select a Picture or Upload a Image'
    };
  }
  const { id } = selectedImage;
  return {
    dimensions,
    selectedImage,
    points: points[id],
    selectedPoint,
    newPoint,
    showPoints,
    showAllComments
  };
}
export default connect(mapStateToProps, {
  setDimensions,
  editImage,
  deleteImage,
  setNewPoint,
  setSelectedPoint,
  toggleOptions
})(SelectedImage);
