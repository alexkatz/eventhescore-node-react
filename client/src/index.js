import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import { configureStore } from './store/configureStore'
import DevTools from './devTools/DevTools'
import { MatchList } from './matchList/MatchList'
import { routes } from './routes'

import './bootstrap-flex.css'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <div>
      <MatchList />
      {DevTools && <DevTools />}
    </div>
  </ Provider>,
  document.getElementById('root'),
)
