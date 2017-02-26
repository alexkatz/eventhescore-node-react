import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { Login } from './auth/Login'
import { App } from './app/App'
import { SessionList } from './session/SessionList'

export const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Login} />
    <Route path='/sessions' component={SessionList} />
  </Route>
)