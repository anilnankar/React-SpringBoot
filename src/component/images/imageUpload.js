import React, { Component } from 'react';
import './imageUpload.css';
// import FileHandler from '../../utils/fileHandler';
import action from '../../redux/actions/image';

export default class ImageUpload extends Component {
  // onFileSelectError = (exception) => {
  //   console.log(exception.error);
  // }

  // onFileSelectSuccess = (file) => {
  //   console.log(file);
  //   console.log("File uploaded successfully");
  // }

  handleImageChange = event => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onloadend = () => {
      if (reader.result) {
        action.uploadImage(reader.result);
      }
    };

    reader.readAsDataURL(file);
  };

  render() {
    return (
      <div className="ImageUpload">
        <div className="App">
        <input
          type="file"
          className="inputUpload"
          onChange={e => this.handleImageChange(e)}
        />
          {/* <form>
            <FileHandler
              fileConfig={{maxSizeInMb: 5,allowedFormats: "jpg,png"}}
              onFileSelectSuccess={(file) => this.onFileSelectSuccess(file)}
              onFileSelectError={({ error }) => this.onFileSelectError(error)}
            />
          </form> */}
        </div>
      </div>
    );
  }
}