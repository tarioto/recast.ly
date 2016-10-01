var searchYouTube = (options, callback) => {

  var url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${options.max}&q=${options.query}&type=video&videoEmbeddable=true&key=${YOUTUBE_API_KEY}`;

  fetch(url, { 
    method: 'GET', 
    headers: new Headers({ 'Content-Type': 'application/json' })
  })
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    callback(json.items);
  });
};

window.searchYouTube = searchYouTube;
