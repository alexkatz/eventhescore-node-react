import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './rootReducer'
import { middleware } from './configureMiddleware'
import DevTools from '../devTools/DevTools'
import { persistStore, autoRehydrate } from 'redux-persist'

const enhancer = compose(
  ...[
    applyMiddleware(...middleware),
    autoRehydrate(),
    DevTools ? DevTools.instrument() : undefined,
  ]
    .filter(e => e)
)

export const configureStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    enhancer,
  )

  persistStore(store, { blacklist: ['routing'] })

  return store
}