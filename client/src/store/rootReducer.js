import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as session } from '../session/reducer'
import { reducer as auth } from '../auth/reducer'

export const rootReducer = combineReducers({
  routing,
  auth,
  session,
})

