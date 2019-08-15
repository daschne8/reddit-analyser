export default function nameReducer(
  state = {loading: false, names: []},
  action){
    switch (action.type) {
      case 'LOADING_NAMES':
        return {...state, loading: true}
      case 'FETCH_NAMES':
        return {loading: false, names: action.payload}
      default:
        return state
    }
  }
