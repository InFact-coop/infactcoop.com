import { createStore as reduxCreateStore } from 'redux'
import { menuReducer } from './reducers'

const initialState = { menuIsOpen: false }

const createStore = () =>
  reduxCreateStore(
    menuReducer,
    initialState,
    typeof window !== 'undefined'
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
export default createStore
