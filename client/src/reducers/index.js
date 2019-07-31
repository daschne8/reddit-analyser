import {combineReducers} from 'redux';
import redditReducer from './redditReducer';
import watsonReducer from './watsonReducer';

const rootReducer = combineReducers({
  reddit: redditReducer,
  watson: watsonReducer
})

export default rootReducer;
