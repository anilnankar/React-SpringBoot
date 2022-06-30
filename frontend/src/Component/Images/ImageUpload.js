import React from "react";
import './ImageUpload.css';
import FileHandler from '../../Utils/FileHandler';

function ImageUpload() {

  const onFileSelectError = (exception) => {
    console.log(exception.error);
  }

  const onFileSelectSuccess = (file) => {
    console.log("File uploaded successfully");
    console.log(file);
  }

  return (
    <div className="ImageUpload">
      <div className="App">
        <form>
          <FileHandler
            fileConfig={{maxSizeInMb: 5,allowedFormats: "jpg,png"}}
            onFileSelectSuccess={(file) => onFileSelectSuccess(file)}
            onFileSelectError={({ error }) => onFileSelectError(error)}
          />
        </form>
      </div>
    </div>
  );
}

export default ImageUpload;
