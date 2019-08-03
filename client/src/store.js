import {createStore, applyMiddleware, compose} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router'
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'
import {combineReducers} from 'redux';
import redditReducer from './reducers/redditReducer';
//import rootReducer from './reducers/index';

export const history = createHistory();

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const rootReducer = combineReducers({
  reddit: redditReducer,
  router: connectRouter(history)
})

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
)

export default store;
