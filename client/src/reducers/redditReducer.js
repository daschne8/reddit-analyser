import fetchComments from '../actions/redditActions';

export default function redditReducer(
  state = {loading: false, comments: []},
  action){
    switch (action.type) {
      case 'LOADING_COMMENTS':
        return {...state, loading: true}
      case 'FETCH_COMMENTS':
        return {loading: true, comments: action.payload}
      default:
        return state

    }
  }
