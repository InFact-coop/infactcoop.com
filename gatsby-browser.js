import React from 'react'
import { Provider } from 'react-redux'
import createStore from './src/state/state'

const { store } = createStore()

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>{element}</Provider>
)
