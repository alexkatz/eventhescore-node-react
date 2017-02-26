import * as actionType from './actionType'

const initialState = {
  user: null,
}
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.AUTHENTICATE_SUCCESS: {
      const { user } = action.payload
      return {
        ...state,
        user,
      }
    }
    case actionType.LOG_OUT:
      return {
        ...state,
        user: null,
      }
    default:
      return state
  }
}