var App = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      videoList: exampleVideoData
    };
  }

  _handleVideoClick (video) {
    this.setState({currentVideo: video});
  }

  render() {
    return (
            <div>
              <Nav />
              <div className="col-md-7">
                <VideoPlayer video={this.state.currentVideo}/>
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
