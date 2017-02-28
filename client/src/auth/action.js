import * as actionType from './actionType'
import { push } from 'react-router-redux'
import { client } from '../apiClient'

const authenticateSuccess = user =>
  async dispatch => {
    await dispatch(dispatch => dispatch({ type: actionType.AUTHENTICATE_SUCCESS, payload: { user } }))
    await dispatch(push({ pathname: '/sessions', state: { fromLogin: true } }))
  }

export const authenticate = ({ accessToken, profile }) =>
  async dispatch => {
    try {
      dispatch({ type: actionType.AUTHENTICATE })
      const user = await client.post('/api/authenticate', {
        accessToken,
        profile,
      })
      console.log(user)
      dispatch(authenticateSuccess(user))
    } catch (error) {
      dispatch({ type: actionType.AUTHENTICATE_FAILURE, payload: { error } })
    }
  }

export const logOut = () =>
  async dispatch => {
    window.localStorage.clear()
    await dispatch({ type: actionType.LOG_OUT })
    await dispatch(push('/'))
  }
