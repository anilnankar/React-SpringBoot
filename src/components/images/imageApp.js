import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ImageList from './imageList';
import ImageUpload from './imageUpload';
import './imageApp.css';

export default class ImageApp extends Component {
  render() {
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
}