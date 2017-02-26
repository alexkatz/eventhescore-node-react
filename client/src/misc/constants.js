export const wrap = (Component, wrappers) => wrappers.reduce((C, wrapper) => wrapper(C), Component)

export const PADDING = 15
export const HEADER_HEIGHT = 70
export const DEFAULT_OPACITY = 0.6
export const HEADER_BOX_SHADOW = 'rgba(0, 0, 0, 0.13) 0px 1px 20px, rgba(0, 0, 0, 0.07) 0px 1px 2px'