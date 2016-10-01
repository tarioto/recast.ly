var CommentList = (props) => (
  <div className='comment comment-list'>
    <h2>Comments</h2>
   {props.comments.map((comment) => <Comment comment={comment}/>)}
  </div>
);

CommentList.propTypes = {
  comments: React.PropTypes.array.isRequired
};

window.CommentList = CommentList;