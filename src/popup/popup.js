import React from "react";
import './popup.css';
import SelectedImage from '../utils/selectedImage';

const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose()}>x</span>
        {props.content}
        <SelectedImage />
      </div>
    </div>
  );
};
 
export default Popup;