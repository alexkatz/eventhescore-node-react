import React from 'react'
import windowResize from './WindowResizeWatcher'

const WindowResize = ComposedComponent =>
  class WindowResizeUpdates extends React.Component {
    componentWillMount() {
      this.state = { windowSize: windowResize.windowSize }
      windowResize.addListener(this.onResize)
    }

    componentWillUnmount() {
      windowResize.removeListener(this.onResize)
    }

    onResize = windowSize => this.setState({ windowSize })

    render() {
      return <ComposedComponent {...this.state} {...this.props} />
    }
  }

export { WindowResize }
