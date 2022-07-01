import React, {useRef} from 'react';
import './fileHandler.css';

function fileHandler({fileConfig, onFileSelectSuccess, onFileSelectError}) {
  // const fileInput = useRef(null);

  const config = {
    maxSizeInMb: fileConfig.maxSizeInMb ? fileConfig.maxSizeInMb : 5,
    allowedFormats: fileConfig.allowedFormats ? fileConfig.allowedFormats : "",
    type: fileConfig.type ? fileConfig.type : "image",
  }

  const handleFileInput = (e) => {
    // handle validations
    const file = e.target.files[0];
    const maxFileSize = config.maxFileSizeInMb*1024*1024;
    if (file.size > maxFileSize) {
      onFileSelectError({ error: "File size cannot exceed more than "+config.maxFileSizeInMb+"MB" });
    }
    else {
      onFileSelectSuccess(file);
    }
  }

  // const handleClick = (event) => {
  //   fileInput.current.click();
  // };


  return (
    <div className="file-uploader">
        <div>
          <button className="dragFile">
            Drag an drop image here
          </button>
        </div>
        <div>
          -or-
        </div>
        <div  className="selectFile">
          <input onChange={handleFileInput} type="file"/>
        </div>        
    </div>
  )

}

export default fileHandler;