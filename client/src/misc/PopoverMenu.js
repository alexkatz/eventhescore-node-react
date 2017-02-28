import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import Measure from 'react-measure'
import OnClickOutside from 'react-onclickoutside'

import { MENU_BOX_SHADOW, PADDING, wrap } from './constants'
import {
  WHITE,
  WHITE_TINTED,
} from './colors'

class PopoverMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      width: 0,
      height: 0,
    }
  }

  handleClickOutside = (e) => {
    this.setState({ isOpen: false })
    const { onOpenChange } = this.props
    if (onOpenChange) onOpenChange(false)
  }

  handleClick = () => {
    const { onOpenChange } = this.props
    const { isOpen } = this.state
    this.setState({ isOpen: !isOpen })
    if (onOpenChange) onOpenChange(!isOpen)
  }

  render() {
    const {
      menuStyle,
      optionStyle,
      options,
      onChange,
      placeholderRenderer,
      placeholderStyle,
    } = this.props
    const { isOpen, width, height  } = this.state
    return (
      <Measure onMeasure={({ width, height }) => this.setState({ width, height })}>
        <div
          onClick={this.handleClick}
          className='no-select'
          style={{
            height: height === 0 ? null : height,
            backgroundColor: WHITE,
            position: 'relative',
            padding: PADDING,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            ...placeholderStyle,
          }}
        >
          {placeholderRenderer && placeholderRenderer()}
          <div
            style={{
              display: isOpen ? 'block' : 'none',
              position: 'absolute',
              top: height - 2,
              right: -1,
              width,
              boxShadow: MENU_BOX_SHADOW,
              backgroundColor: WHITE,
              zIndex: 100,
              ...menuStyle,
            }}
          >
            {options && Array.isArray(options) &&
            options.map((option, index) => (
              <div
                key={index}
                className='no-select'
                onClick={() => onChange(option)}
                style={{
                  width,
                  padding: PADDING,
                  backgroundColor: WHITE,
                  ':hover': {
                    backgroundColor: WHITE.clone().darken(2),
                  },
                  ...optionStyle,
                }}
              >
                {option.label}
              </div>
            ))
            }
          </div>

        </div>
      </Measure>
    )
  }
}

PopoverMenu.propTypes = {
  placeholderRenderer: PropTypes.func,
  placeholderStyle: PropTypes.object,
  menuStyle: PropTypes.object,
  optionStyle: PropTypes.object,
  options: PropTypes.array,
  onChange: PropTypes.func,
  onOpenChange: PropTypes.func,
}

const wrapped = wrap(PopoverMenu, [
  Radium,
  OnClickOutside,
])

export { wrapped as PopoverMenu }