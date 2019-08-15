export default function redditReducer(
  state = {loading: false, comments: {a: [],b: [], c: []}, names: [], error: false, errorMessage: '', prevComments: []},
  action){
    let fullstate = {}
    switch (action.type) {
      case 'LOADING_COMMENTS':
        return {...state, loading: true}
      case 'FETCH_COMMENTS':
        fullstate = {...state,loading: false, comments: {...state.comments}}
        fullstate['comments'][action.which] = action.payload
        return fullstate
      case 'THROW_ERROR':
        return {...state,loading: false, comments: [], error: true, errorMessage: action.payload}
      case 'CLEAR_COMMENTS':
        fullstate = {...state, prevComments: state.comments['a']}
        fullstate['comments']['a'] = []
        return fullstate
      case 'LOADING_NAMES':
        return {...state, loading: true}
      case 'FETCH_NAMES':
        return {...state, loading: false, names: action.payload}
      default:
        return state

    }
  }
