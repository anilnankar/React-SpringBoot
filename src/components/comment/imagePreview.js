import React, { Component } from "react";
import ReactCursorPosition from "react-cursor-position";
import Measure from "react-measure";
import Point from "./point";
import { setPoint } from "../../utils/localStorage";
import styles from "../../styles";

// Creates a constant from style
const style = styles.ImagePreview;

// ImagePreview component to measure and take cursor point
class ImagePreview extends Component {

  // Function of set new point
  setComment = (event) => {
    event.stopPropagation();
    const { dimensions, setNewPoint } = this.props;
    const newPoint = setPoint(dimensions, this.currentPosition);
    if (newPoint) {
      setNewPoint(newPoint);
    }
  };

  render() {
    // Create constant from props
    const {
      dimensions,
      image,
      imgPoints,
      selectedPoint,
      showPoints,
      newPoint,
      setDimensions,
      setSelectedPoint,
    } = this.props;

    return (
      <div style={style.main}>
        <Measure bounds onResize={(measure) => setDimensions(measure.bounds)}>
          {({ measureRef }) => (
            <div>
              <ReactCursorPosition
                onPositionChanged={(currentPosition) =>
                  (this.currentPosition = currentPosition)
                }
              >
                <div onClick={this.setComment}>
                  <div style={style.commentDiv}>
                    <img
                      style={style.mainImage}
                      alt="#"
                      ref={measureRef}
                      src={image.file}
                      className="img"
                    />
                  </div>
                  <div style={style.commentDiv}>
                    {imgPoints.map((point) => (
                      <Point
                        id={point}
                        key={point}
                        dimensions={dimensions}
                        showPoints={showPoints}
                        selectedPoint={selectedPoint}
                        setSelectedPoint={setSelectedPoint}
                        image={image}
                      />
                    ))}
                    {newPoint ? (
                      <Point
                        id={newPoint}
                        key={newPoint}
                        dimensions={dimensions}
                        showPoints={showPoints}
                        newPoint
                        selectedPoint={selectedPoint}
                        setSelectedPoint={setSelectedPoint}
                        image={image}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </ReactCursorPosition>
            </div>
          )}
        </Measure>
      </div>
    );
  }
}

// Export ImagePreview compoenent
export default ImagePreview;