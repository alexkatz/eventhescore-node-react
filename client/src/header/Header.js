import React from 'react'
import { connect } from 'react-redux'
import { HEADER_HEIGHT, HEADER_BOX_SHADOW, PADDING, wrap } from '../misc/constants'
import { PopoverMenu } from '../misc/PopoverMenu'
import { WindowResize } from '../misc/WindowResize'
import { logOut } from '../auth/action'

const Header = ({ user, logOut, windowSize: { width } }) => {
  const options = [
    { label: 'Log Out', value: 0, onClick: () => logOut() }
  ]
  const compact = width < 500
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: HEADER_HEIGHT,
        boxShadow: HEADER_BOX_SHADOW,
        width: '100%',
        position: 'relative',
      }}
    >
    <span
      style={{
        fontSize: compact ? 20 : 24,
        fontWeight: 600,
      }}
    >
    Even the Score
    </span>
      {user && !compact && (
        <PopoverMenu
          options={options}
          onChange={({ onClick }) => onClick()}
          placeholderStyle={{
            position: 'absolute',
            right: 0,
            top: 0,
            height: HEADER_HEIGHT,
            display: 'flex',
            alignItems: 'center',
          }}
          placeholderRenderer={() => (
            <div>
              {! compact && (<span style={{ marginRight: PADDING }}>{user.firstName}</span>)}
              <img
                style={{ height: HEADER_HEIGHT - 5, borderRadius: HEADER_HEIGHT - 5 }}
                src={user.imageUrl}
                role='presentation'
              />
            </div>
          )}
        />
      )}
      {user && compact && (
        <div
          style={{

          }}
        >
        </div>
      )}
    </div>
  )
}

const wrapped = wrap(Header, [
  WindowResize,
  connect(
    state => ({ user: state.auth.user }),
    { logOut },
  )
])

export { wrapped as Header }