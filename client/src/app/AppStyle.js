import React from 'react'
import { Style } from 'radium'

const AppStyle = () => (
  <Style
    rules={{
      'html, body, #root, #root > div': {
        height: '100%',
        overflow: 'hidden',
        fontFamily: 'Amiko',
      },
      '.no-select': {
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        KhtmlUserSelect: 'none',
        MozUserSelect: 'none',
        MsUserSelect: 'none',
        userSelect: 'none,'
      },
    }}
  />
)

export { AppStyle }