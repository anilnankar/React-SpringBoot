import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImagePicker from '../../utils/imagePicker';
import actions from '../../redux/actions';
import './imageUpload.css';
import styles from '../../styles';

const { addImage, setSelectedPoint } = actions;
const style = styles.Gallary;

class Gallary extends Component {
  handleSubmit = event => {
    event.preventDefault();
  };

  handleImageChange = event => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onloadend = () => {
      if (reader.result) {
        this.props.addImage(reader.result);
      }
    };

    reader.readAsDataURL(file);
  };
  render() {
    return (
      <div
        // style={style.main}
        onClick={() => {
          setSelectedPoint(null);
        }}
      >
        <ImagePicker addImage={this.props.addImage} />       
      </div>
    );
  }
}
function mapStateToProps(state) {
  const images = state.reducers.images;
  return { images };
}

export default connect(mapStateToProps, {
  addImage
})(Gallary);

