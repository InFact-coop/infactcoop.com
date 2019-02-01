import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import createStore from './src/state/state'

const { store } = createStore()

// const replaceRenderer = ({
//   bodyComponent,
//   replaceBodyHTMLString,
//   setHeadComponents,
// }) => {
//   const sheet = new ServerStyleSheet()

//   const app = () => (
//     <Provider store={store}>
//       <StyleSheetManager sheet={sheet.instance}>
//         {bodyComponent}
//       </StyleSheetManager>
//     </Provider>
//   )
//   replaceBodyHTMLString(renderToString(<app />))
//   setHeadComponents([sheet.getStyleElement()])
// }

// eslint-disable-next-line react/display-name
export default ({ element }) => <Provider store={store}>{element}</Provider>
