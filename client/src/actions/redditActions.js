export function fetchComments(user){
  return(dispatch) => {
    dispatch({type: 'LOADING_COMMENTS'})
    return fetch(`http://www.reddit.com/user/${user}.json`)
      .then(res => {return res.json()})
      .then(data => dispatch({type:'FETCH_COMMENTS', payload: data.data.children}))
  }
}
