import React, { useEffect } from "react";
import './ImageList.css';
import ImageService from '../../Services/ImageService';

function ImageList() {

  useEffect(() => {
    fetchAllImages();
  }, []);

  const fetchAllImages = () => {
    ImageService.getAllImages()
      .then((response) => {
          console.log(response);
      })
      .catch((e) => {
        console.log("Error: ", e.message);
      });
  };


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

export default ImageList;
