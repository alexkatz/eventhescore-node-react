import React from 'react'
import { connect } from 'react-redux'
import { wrap } from '../misc/constants'
import * as actions from './action'
import { FacebookLoginButton } from './FacebookLoginButton'

const Login = ({ authenticate }) => {
  const onAuthenticate = response => {
    if (response.accessToken) {
      authenticate({
        accessToken: response.accessToken,
        profile: {
          firstName: response.firstName,
          lastName: response.lastName,
          email: response.email,
          imageUrl: response.imageUrl,
        },
      })
    }
  }
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FacebookLoginButton
        style={{
          marginTop: 40,
        }}
        appId={'220096918457019'}
        onAuthenticate={onAuthenticate}
      />
    </div>
  )
}

const wrapped = wrap(Login, [
  connect(
    null,
    actions,
  )
])

export { wrapped as Login }