import React, { Component, PropTypes } from 'react'
import { FACEBOOK_BLUE, WHITE } from '../misc/colors'
import { DEFAULT_OPACITY } from '../misc/constants'
import logo from '../assets/FB-f-Logo__blue_100.png'

const INNER_PADDING = 10

const style = {
  button: disabled => ({
    backgroundColor: FACEBOOK_BLUE,
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    opacity: disabled ? DEFAULT_OPACITY : 1,
    pointerEvents: disabled ? 'none' : 'inherit',
    width: 300,
    height: 60,
    display: 'flex',
  }),
  image: height => ({
    height: height - (2 * INNER_PADDING),
    marginLeft: INNER_PADDING,
    marginTop: INNER_PADDING,
  }),
  text: (width, height) => ({
    color: WHITE,
    fontFamily: 'Lucia Grande, Tahoma, Roboto, sans-serif',
    fontSize: width > 299 ? 18 : width / 21,
    height,
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
}

class FacebookLoginButton extends Component {
  componentDidMount() {
    const { appId } = this.props

    if (!document.getElementById('fb-root')) {
      const fbRoot = document.createElement('div')
      fbRoot.id = 'fb-root'
      document.body.appendChild(fbRoot)
    }
    window.fbAsyncInit = () => {
      window.FB.init({
        appId,
      })
    }
    ((d, s, id) => {
      const element = d.getElementsByTagName(s)[0]
      const fjs = element
      let js = element
      if (d.getElementById(id)) return
      js = d.createElement(s)
      js.id = id
      js.src = '//connect.facebook.net/en_US/all.js'
      fjs.parentNode.insertBefore(js, fjs)
    })(document, 'script', 'facebook-jssdk')

  }

  onClick = e => {
    const { onAuthenticate, onClick } = this.props
    const scope = 'public_profile,email'

    if (typeof onClick === 'function') {
      onClick(e)
    }

    window.FB.login(response => {
      const { authResponse } = response
      if (authResponse) {
        window.FB.api('/me', { fields: 'first_name,last_name,email,picture' }, me => {
          onAuthenticate({
            ...authResponse,
            firstName: me.first_name,
            lastName: me.last_name,
            email: me.email,
            imageUrl: me.picture.data.url,
          })
        })
      }
    }, { scope })
  }

  render() {
    const { style: externalStyle, disabled } = this.props
    const height = (externalStyle && externalStyle.height) || style.button().height
    const width = (externalStyle && externalStyle.width) || style.button().width
    return (
      <button
        style={{ ...style.button(disabled), ...externalStyle}}
        onClick={this.onClick}
        disabled={disabled}
      >
        <img style={style.image(height)} src={logo} role='presentation' />
        <div style={style.text(width, height)}>Log in with Facebook</div>
      </button>
    )
  }
}

FacebookLoginButton.propTypes = {
  style: PropTypes.object,
  disabled: PropTypes.bool,
  onAuthenticate: PropTypes.func,
  appId: PropTypes.string,
}

export { FacebookLoginButton }