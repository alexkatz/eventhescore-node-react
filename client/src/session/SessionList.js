import React, { Component } from 'react'
import { List } from 'react-virtualized'
import { wrap, HEADER_HEIGHT } from '../misc/constants'
import { WindowResize } from '../misc/WindowResize'

class SessionList extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    const { windowSize: { width, height } } = this.props
    const SESSION_LIST_HEIGHT = height - HEADER_HEIGHT
    return (
      <div
        style={{
          width,
          height: SESSION_LIST_HEIGHT,
        }}
      >
      </div>
    )
  }
}

const wrapped = wrap(SessionList, [
  WindowResize,
])

export { wrapped as SessionList }