import thunk from 'redux-thunk'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'

const middleware = [
  routerMiddleware(browserHistory),
  thunk,
]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(require('redux-freeze'))
}

export { middleware }


