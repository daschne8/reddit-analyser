import fetchComments from '../actions/redditActions';

export default function redditReducer(
  state = {loading: false, comments: [], error: false, errorMessage: '', prevComments: []},
  action){
    switch (action.type) {
      case 'LOADING_COMMENTS':
        return {...state, loading: true}
      case 'FETCH_COMMENTS':
        return {...state,loading: true, comments: action.payload}
      case 'THROW_ERROR':
        return {...state,loading: false, comments: [], error: true, errorMessage: action.payload}
      case 'CLEAR_COMMENTS':
        return {...state, prevComments: state.comments, comments: []}
      default:
        return state

    }
  }
