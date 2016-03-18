export default function createSource(type) {
  return new Promise((resolve) => {
    resolve({
      message: 'This came from the api server',
      time: Date.now(),
      type: type
    });
  });
}

// export function fetchPreview(config) {
//  return dispatch => {
//    dispatch(requestPosts(subreddit))
//    return fetch(`http://www.reddit.com/r/${subreddit}.json`)
//      .then(req => req.json())
//      .then(json => dispatch(receivePosts(subreddit, json)))
//  }
// }