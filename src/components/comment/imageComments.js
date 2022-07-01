import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlankCenterDiv from './blankCenterDiv';
import actions from '../../redux/actions';
import { timeDifference } from '../../utils/localStorage';
import styles from '../../styles';

const { setSelectedPoint } = actions;
const style = styles.AllComments;

class ImageComments extends Component {
  render() {
    const {
      imageId,
      dimensions,
      selectedPoint,
      showAllComments,
      comments,
      setSelectedPoint
    } = this.props;
    let imageComments = comments[imageId];
    const commentComponent = comment => (
      <div
        key={comment.id}
        style={
          comment.pointId === selectedPoint ? (
            style.selecteCommentComponent
          ) : (
            style.commentComponent
          )
        }
        onClick={event => {
          event.stopPropagation();
          setSelectedPoint(comment.pointId);
        }}
      >
        <div style={style.commentBody}>
          <span style={style.commentUser}>{comment.user}</span>
          <span style={style.commentTime}>{timeDifference(comment.time)}</span>
        </div>
        <span style={style.commentSpan}>{comment.comment}</span>
      </div>
    );
    return (
      <div className='comments'>
        {imageComments.length === 0 ? (
          <BlankCenterDiv text="No Comments" />
        ) : (
          imageComments.map(commentComponent)
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    dimensions,
    selectedImage,
    selectedPoint,
    comments,
    showAllComments
  } = state.reducers;

  const { id } = selectedImage;
  
  return {
    dimensions,
    selectedImage,
    selectedPoint,
    showAllComments,
    comments
  };
}
export default connect(mapStateToProps, { setSelectedPoint })(ImageComments);
