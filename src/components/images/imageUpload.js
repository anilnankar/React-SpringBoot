import React, { Component } from "react";
import { connect } from "react-redux";
import ImagePicker from "../../utils/imagePicker";
import actions from "../../redux/actions";
import "./imageUpload.css";
// import { Redirect } from 'react-router-dom';

// Creates a constant from actions
const { addImage, setSelectedPoint } = actions;

// ImageUpload component to upload new image
class ImageUpload extends Component {

  // Function to prevent defult submit event
  handleSubmit = (event) => {
    event.preventDefault();
  };

  // Funtion to upload image
  handleImageChange = (event) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onloadend = () => {
      if (reader.result) {
        this.props.addImage(reader.result);
      }
    };

    reader.readAsDataURL(file);
    // <Redirect to={'/imageList'} />
  };
  render() {
    return (
      <div
        onClick={() => {
          setSelectedPoint(null);
        }}
      >
        <ImagePicker addImage={this.props.addImage} />
      </div>
    );
  }
}

// This funtion will return images data from redux store
function mapStateToProps(state) {
  const images = state.reducers.images;
  return { images };
}

// Connecting the component to the redux store & export ImageUpload component
export default connect(mapStateToProps, {
  addImage,
})(ImageUpload);
