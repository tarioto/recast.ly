import React from 'react'
var Comment = (props) => (
  <div className="video-list-entry comment">
      <div className="media-left media-middle">
        <img className="media-object" src={props.comment.image} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title">{props.comment.author}</div>
        <div className="video-list-entry-detail">{props.comment.text}</div>
      </div>
    </div>
);

Comment.propTypes = {
  comment: React.PropTypes.object.isRequired
};

export default Comment;