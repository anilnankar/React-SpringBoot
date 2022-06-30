import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './ImageApp.css';
import ImageList from './ImageList';
import ImageUpload from './ImageUpload';

function ImageApp() {
  return (
    <div className="ImageApp">
      <Router>
        <div>
          <ul id="imageMenu">
            <li>
              <Link to="/">Upload</Link>
            </li>
            <li>
              <Link to="/imageList">Images</Link>
            </li>
          </ul>
        </div>
        <div id="imageRoutes"></div>
        <hr />
        <Routes>
          <Route exact path="/" element={<ImageUpload/>}/>
          <Route exact path="/imageList" element={<ImageList/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default ImageApp;
