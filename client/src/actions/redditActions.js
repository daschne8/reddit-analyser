export function fetchComments(user){
  return(dispatch) => {
    const url = `/api/comment?q=${user}`
    //const url = `https://www.reddit.com/user/${user}/comments.json`
    dispatch({type: 'LOADING_COMMENTS'})
    return fetch(url)
      .then(res => {
        return res.json()})
      .then(data =>
        dispatch({type:'FETCH_COMMENTS', payload: data.result}))
  }
}
