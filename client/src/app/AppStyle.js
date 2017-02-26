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
    }}
  />
)

export { AppStyle }