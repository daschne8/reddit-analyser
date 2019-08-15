export function fetchComments(user,which){
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
          console.log('data from fetch', data);
          console.log('which',which);
          dispatch({type:'FETCH_COMMENTS', payload: data, which: which})})
      .catch((err) => {
        dispatch({type:'THROW_ERROR', payload: err})
      })
  }
}

export function fetchNames(){
  return(dispatch) => {
    const url = '/api/names'
    dispatch({type: 'LOADING_NAMES'})
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then( data =>
      dispatch({type: 'FETCH_NAMES', payload: data}))
  }
}
