import React, { Component } from "react";

export default class ImagePicker extends Component {
  handleImageChange = (event) => {
    event.preventDefault();
    const { addImage } = this.props;
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onloadend = () => {
      if (reader.result) {
        addImage(reader.result);
      }
    };

    reader.readAsDataURL(file);
  };
  render() {
    return (
      <div className="fileUpload">
        <input
          type="file"
          className="inputUpload"
          onChange={(e) => this.handleImageChange(e)}
        />
      </div>
    );
  }
}
