import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputTextbox from '../ui/form/inputTextbox';
import InputTextarea from '../ui/form/inputTextarea';
import Button from '../ui/form/button';
import actions from '../../redux/actions';
import { timeDifference } from '../../utils/localStorage';
import styles from '../../styles';

const { setComments } = actions;
const style = styles.PointComments;

const removePoint = (points, pointId) => {
  const newPoints = [];
  points.forEach(point => {
    if (point !== pointId) {
      newPoints.push(point);
    }
  });
  return newPoints;
};
const removeComment = (comments, deletedComment) => {
  const newComments = [];
  comments.forEach(singleComment => {
    if (deletedComment.id !== singleComment.id) {
      newComments.push(singleComment);
    }
  });
  return newComments;
};
class PointComments extends Component {
  render() {
    const {
      image,
      points,
      newPoint,
      selectedPoint,
      pointId,
      comments,
      thisPointComments,
      setComments
    } = this.props;
    if (selectedPoint !== pointId) {
      return <div />;
    }
    const commentComponent = comment => (
      <div style={style.commentComponent} key={comment.id}>
        <div style={style.commentBody}>
          <span style={style.commentUser}>{comment.user}</span>
          <span style={style.commentTime}>{timeDifference(comment.time)}</span>
          <span
            style={style.commentDelete}
            onClick={event => {
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
        onClick={event => {
          event.stopPropagation();
        }}
        style={style.main}
      >
        <div style={style.commentsWrapper}>
          {thisPointComments.map(commentComponent)}
        </div>
        <InputTextarea
          autoFocus
          clearOnSearch
          placeholder="Enter Comment"
          style={style.inputtextarea}
          onSearch={comment => {
            if (comment) {
              const newComment = {
                comment,
                id: new Date().getTime(),
                time: new Date().getTime(),
                user: 'Email',
                pointId
              };
              const newComments = [newComment, ...comments];
              const newPoints = newPoint ? [pointId, ...points] : points;
              setComments(image, newPoints, newComments);
            }
          }}
        />
        <InputTextbox
          autoFocus
          clearOnSearch
          placeholder="Enter Email"
          style={style.input}
          onSearch={comment => {
            if (comment) {
              const newComment = {
                comment,
                id: new Date().getTime(),
                time: new Date().getTime(),
                user: 'Email',
                pointId
              };
              const newComments = [newComment, ...comments];
              const newPoints = newPoint ? [pointId, ...points] : points;
              setComments(image, newPoints, newComments);
            }
          }}
        />
        <div style={style.buttons}>
          <Button
            value="submit"
            title="Comment"
            style={style.input}
          />
          <Button
            title="Cancel"
            style={style.input}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { selectedImage, points, comments, selectedPoint } = state.reducers;
  const { id } = selectedImage;
  const thisPointComments = [];
  comments[id].forEach(comment => {
    if (comment.pointId === selectedPoint) {
      thisPointComments.push(comment);
    }
  });
  return {
    selectedImage,
    points: points[id],
    comments: comments[id],
    thisPointComments,
    selectedPoint
  };
}
export default connect(mapStateToProps, { setComments })(PointComments);
