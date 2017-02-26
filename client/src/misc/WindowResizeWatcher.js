import debounce from 'lodash.debounce'

let instance = null

class WindowResize {
  constructor() {
    if (!instance) {
      instance = this
    }

    this._listeners = []
    this.windowSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    window.addEventListener('resize', this.onResize)

    return instance
  }

  onResize = debounce(({ target }) => {
    const windowSize = { width: target.innerWidth, height: target.innerHeight }
    this.windowSize = windowSize
    this._listeners.forEach(listener => listener(windowSize))
  }, 500)

  addListener(listener) {
    this._listeners.push(listener)
  }

  removeListener(listener) {
    this._listeners = this._listeners.filter(l => l !== listener)
  }

  stopListening() {
    window.removeEventListener('resize', this.onResize)
  }
}

export default new WindowResize()