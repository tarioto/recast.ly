import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import getComments from './lib/getComments.js'
import searchYouTube from './lib/searchYouTube.js'
// TODO: Render the `App` component to the DOM

ReactDOM.render(<App getComments={getComments} searchYouTube={searchYouTube} />, document.getElementById('app'));