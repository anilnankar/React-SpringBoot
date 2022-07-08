import React, { Component } from "react";
import { connect } from "react-redux";
import InputTextbox from "../ui/form/inputTextbox";
import InputTextarea from "../ui/form/inputTextarea";
import Button from "../ui/form/button";
import actions from "../../redux/actions";
import { timeDifference } from "../../utils/localStorage";
import styles from "../../styles";

// Creates a constant from actions and style
const { setComments } = actions;
const style = styles.PointComments;

// Function to remove point
const removePoint = (points, pointId) => {
  const newPoints = [];
  points.forEach((point) => {
    if (point !== pointId) {
      newPoints.push(point);
    }
  });
  return newPoints;
};

// Function to remove comment
const removeComment = (comments, deletedComment) => {
  const newComments = [];
  comments.forEach((singleComment) => {
    if (deletedComment.id !== singleComment.id) {
      newComments.push(singleComment);
    }
  });
  return newComments;
};

// ImageComments component to display comment a form
class PointComments extends Component {
  state = {
    email: "",
    comment: ""
  };

  updateEmailState = function(email) {
    this.setState({email: email})
  }

  getState = function() {
    return {
      email: this.state.email,
      comment: this.state.comment,
    };
  }

  render() {
    // Creates a constant from props
    const {
      image,
      points,
      newPoint,
      selectedPoint,
      pointId,
      comments,
      thisPointComments,
      setComments,
    } = this.props;

    const {
      email,
      comment
    } = this.getState();

    // If selected point is same as point the return
    if (selectedPoint !== pointId) {
      return <div />;
    }

    const addComment = function() {
      const newComment = {
        comment: comment,
        email: email,
        id: new Date().getTime(),
        time: new Date().getTime(),
        user: "Comment",
        pointId,
      };

      const newComments = [newComment, ...comments];
      const newPoints = newPoint ? [pointId, ...points] : points;
      setComments(image, newPoints, newComments, pointId);
    }

    const cancelComment = function() {
      console.log("cancelComment");
    }

    // Create comment componenet for each comment
    const commentComponent = (comment) => (
      <div style={style.commentComponent} key={comment.id}>
        <div style={style.commentBody}>
          <span style={style.commentUser}>Email: {comment.email}</span>
          <span
            style={style.commentDelete}
            onClick={(event) => {
              event.stopPropagation();
              const newPoints =
                thisPointComments.length === 1
                  ? removePoint(points, pointId)
                  : points;
              const newComments = removeComment(comments, comment);
              setComments(image, newPoints, newComments, pointId);
            }}
          >
            X
          </span>
        </div>
        <span style={style.commentSpan}>{comment.comment}</span>
      </div>
    );
    return (
      <div
        onClick={(event) => {
          event.stopPropagation();
        }}
        style={style.main}
      >
        <div style={style.commentsWrapper}>
          {thisPointComments.map(commentComponent)}
        </div>
        <InputTextarea
          autoFocus
          placeholder="Enter Comment"
          style={style.inputTextarea}
          name="comment"
          onSearch={(comment) => {
            if (comment) {
              this.setState({comment: comment});
            }
          }}
        />

        <InputTextbox
          placeholder="Enter Email"
          style={style.inputTextbox}
          onSearch={(email) => {
            if (email) {
              this.setState({email: email});
            }
          }}
        />

        <div style={style.buttons}>
          <Button value="submit" title="Comment" onClickCall={addComment} />
          <Button title="Cancel" onClickCall={cancelComment}/>
        </div>
      </div>
    );
  }
}

// This funtion will return comment data from redux store
function mapStateToProps(state) {
  const { selectedImage, points, comments, selectedPoint } = state.reducers;
  const { id } = selectedImage;
  const thisPointComments = [];
  comments[id].forEach((comment) => {
    if (comment.pointId === selectedPoint) {
      thisPointComments.push(comment);
    }
  });
  return {
    selectedImage,
    points: points[id],
    comments: comments[id],
    thisPointComments,
    selectedPoint,
  };
}

// Connecting the component to the redux store & export ImageList component
export default connect(mapStateToProps, { setComments })(PointComments);
