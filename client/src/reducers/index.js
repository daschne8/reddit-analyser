import {combineReducers} from 'redux';
import redditReducer from './redditReducer';
import {connectRouter} from 'connected-react-router'
import history from '../store'

const rootReducer = combineReducers({
  reddit: redditReducer,
  router: connectRouter(history)
})

export default rootReducer;
