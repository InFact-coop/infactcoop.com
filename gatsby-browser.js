import React from 'react'
import { Provider } from 'react-redux'
import createStore from './src/state/state'

export const wrapRootElement = ({ element }) => {
  const store = createStore()

  const ConnectedRootElement = (
    <Provider store={store}>
    {element}
    </Provider>
  )

   return ConnectedRootElement
}

