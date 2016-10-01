import React from 'react'
var Search = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      throttled: false
    };
  }
  search (query) {
    if (!this.state.throttled) {
      this.props.updateVideoList
      .searchYouTube({query: query, max: 10, key: 'we rock'}, this.props.updateVideoList.setVideoState);
      this.setState({throttled: true});
      setTimeout(() => { this.setState({throttled: false}); }, 500);
    }
  }


  render () { 
    return (
      <div className="search-bar form-inline">
        <input className="form-control" onInput={(e)=> this.search(e.target.value)} type="text" />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
};
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
