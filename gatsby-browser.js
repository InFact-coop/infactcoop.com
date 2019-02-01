import React from 'react'
import { Provider } from 'react-redux'
import createStore from './src/state/state'

const store = createStore()

// eslint-disable-next-line react/display-name
export default ({ element }) => <Provider store={store}>{element}</Provider>
