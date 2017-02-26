import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import { configureStore } from './store/configureStore'
import DevTools from './devTools/DevTools'
import { MatchList } from './session/SessionList'
import { routes } from './routes'

import './bootstrap-flex.css'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes} />
      {DevTools && <DevTools />}
    </div>
  </ Provider>,
  document.getElementById('root'),
)
