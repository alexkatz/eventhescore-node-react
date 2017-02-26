import React from 'react'
import { wrap } from '../misc/constants'
import { WindowResize } from '../misc/WindowResize'
import { Header } from '../header/Header'
import { AppStyle } from './AppStyle'

const App = ({
  children,
  windowSize: { width, height },
}) => (
  <div
    style={{
      width,
      height,
    }}
  >
    <Header />
    {children}
    <AppStyle />
  </div>
)

const wrapped = wrap(App, [
  WindowResize,
])

export { wrapped as App }