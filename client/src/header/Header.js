import React from 'react'
import { HEADER_HEIGHT, HEADER_BOX_SHADOW } from '../misc/constants'

const Header = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: HEADER_HEIGHT,
      boxShadow: HEADER_BOX_SHADOW,
      width: '100%',
    }}
  >
    <span
      style={{
        fontSize: 24,
        fontWeight: 600,
      }}
    >
    Even the Score
    </span>
  </div>
)

export { Header }