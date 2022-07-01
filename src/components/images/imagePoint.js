import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlankCenterDiv from '../comment/blankCenterDiv';
import ImagePreview from '../comment/imagePreview';
import actions from '../../redux/actions';

const {
  setDimensions,
  editImage,
  deleteImage,
  setNewPoint,
  setSelectedPoint,
  toggleOptions
} = actions;

class ImagePoint extends Component {
  render() {
    const {
      image,
      dimensions,
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
    const imgPoints = points[image.id];
    const imagePreViewProps = {
      dimensions,
      image,
      imgPoints,
      selectedPoint,
      newPoint,
      showPoints,
      setDimensions,
      setNewPoint,
      setSelectedPoint
    };

    return (
      <div
        onClick={event => {
          event.stopPropagation();
          setSelectedPoint(null);
        }}
      >
          <div
            style={{
              height: dimensions.height,
            }}
          >
            <ImagePreview {...imagePreViewProps} />
          </div>
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
  return {
    dimensions,
    selectedImage,
    points: points,
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
})(ImagePoint);
