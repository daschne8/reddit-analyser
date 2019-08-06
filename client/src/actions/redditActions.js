export function fetchComments(user){
  return(dispatch) => {
    const url = `/api/comment?q=${user}`
    //const url = `https://www.reddit.com/user/${user}/comments.json`
    dispatch({type: 'LOADING_COMMENTS'})
    return fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Invald User/Subreddit')
        }})
      .then(data =>
        dispatch({type:'FETCH_COMMENTS', payload: data.result}))
      .catch((err) => {
        dispatch({type:'THROW_ERROR', payload: err})
      })
  }
}
