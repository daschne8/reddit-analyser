import {combineReducers} from 'redux';
import redditReducer from './redditReducer';

const rootReducer = combineReducers({
  reddit: redditReducer,
})

export default rootReducer;
