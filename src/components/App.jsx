
var App = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      videoList: exampleVideoData,
      comments: [{
        image: '',
        author: '',
        text: ''
      }]
    };
  }

  componentDidMount () {
    this.props.searchYouTube({query: 'gummy bears', max: 10, key: 'no'}, this.setVideoState.bind(this));
  }

  _handleVideoClick (video) {
    this.setState({currentVideo: video});
    this.props.getComments(this.state.currentVideo.id.videoId, this._upDateComments.bind(this));
  }

  _upDateComments (comments) {

    this.setState({comments: comments.map( comment => {
      var newComment = {};
      newComment.image = comment.snippet.topLevelComment.snippet.authorProfileImageUrl;
      newComment.author = comment.snippet.topLevelComment.snippet.authorDisplayName;
      newComment.text = comment.snippet.topLevelComment.snippet.textDisplay;
      return newComment;
    })
    });
  }

  setVideoState (videos) {
    this.setState({
      videoList: videos
    });
  }

  render() {
    return (
            <div>
              <Nav updateVideoList={{searchYouTube: this.props.searchYouTube, setVideoState: this.setVideoState.bind(this)}}/>
              <div className="col-md-7">
                <VideoPlayer comments={this.state.comments} video={this.state.currentVideo}/>
              </div>
              <div className="col-md-5">                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                <VideoList handleVideoClick={this._handleVideoClick.bind(this)} videos={this.state.videoList} />
              </div>
            </div>
            );
  }

};
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

