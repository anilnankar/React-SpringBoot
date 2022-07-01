import React, { Component } from 'react';
import './imageList.css';
// import ImageService from '../../services/imageService';

export default class ImageList extends Component {
  
  //fetchAllImages();

  // fetchAllImages = () => {
  //   ImageService.getAllImages()
  //     .then((response) => {
  //         console.log(response);
  //     })
  //     .catch((e) => {
  //       console.log("Error: ", e.message);
  //     });
  // };

  render() {
    return (
      <div className="imageList">
        <ul>
          <li className="image">
            <img src="/data/1.jpg" alt="" className="img"/>
            <h3>Image 1</h3>
          </li>
          <li className="image">
            <img src="/data/2.jpg" alt="" className="img"/>
            <h3>Image 2</h3>
          </li>
          <li className="image">
            <img src="/data/3.jpg" alt="" className="img"/>
            <h3>Image 3</h3>
          </li>
        </ul>
      </div>
    );
  }
}