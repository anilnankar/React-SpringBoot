import React, { Component } from 'react';
import { connect } from 'react-redux';
import './imageList.css';
import SingleImage from './singleImage';
import styles from '../../styles';
import actions from '../../redux/actions';
const style = styles.Gallary;
const { addImage, changSelectedeImage, setSelectedPoint } = actions;


class ImageList extends Component {
  
  render() {
    const { images, changSelectedeImage, setSelectedPoint } = this.props;
    return (
      <div
      // style={style.main}
      onClick={() => {
        setSelectedPoint(null);
      }}
    >
      <div className='imageList'>
        <ul>
          {images.map(image => (
            <li>
            <SingleImage
              key={image.id}
              image={image}
              changSelectedeImage={changSelectedeImage}
            />
            </li>
          ))}
          </ul>
        </div>     
    </div>
    );
  }
}

function mapStateToProps(state) {
  const images = state.reducers.images;
  return { images };
}

export default connect(mapStateToProps, {
  addImage,
  changSelectedeImage,
  setSelectedPoint
})(ImageList);
