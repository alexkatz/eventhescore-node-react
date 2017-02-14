import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { App } from './app/App'
import { MatchList } from './matchList/MatchList'

export const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={MatchList} />
  </Route>
)