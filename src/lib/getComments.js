var getComments = (id, callback) => {

  var url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=10&videoId=${id}&key=${YOUTUBE_API_KEY}`;

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

window.getComments = getComments;
