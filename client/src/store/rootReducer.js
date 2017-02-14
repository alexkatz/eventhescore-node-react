import { combineReducers } from 'redux'
import { reducer as match } from '../matchList/reducer'

export const rootReducer = combineReducers({
  match,
})

