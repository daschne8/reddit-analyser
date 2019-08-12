import React from 'react';
import './index.css';
import App from './App';

import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import store,{history} from './store'


const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
    <div>
      <App />
    </div>
    </ConnectedRouter>
  </Provider>,
  target
)
