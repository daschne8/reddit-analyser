export function fetchComments(user){
  return(dispatch) => {
    const url = `/api/comment?q=${user}`
    dispatch({type: 'LOADING_COMMENTS'})
    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Invald User/Subreddit')
        }})
      .then(data =>
        {
          dispatch({type:'FETCH_COMMENTS', payload: data})})
      .catch((err) => {
        dispatch({type:'THROW_ERROR', payload: err})
      })
  }
}
