// import React from 'react'
// import { Provider } from 'react-redux'
// import { renderToString } from 'react-dom/server'
// import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
// import createStore from './src/state/state'

// const replaceRenderer = ({
//   bodyComponent,
//   replaceBodyHTMLString,
//   setHeadComponents,
// }) => {
//   const sheet = new ServerStyleSheet()
//   const store = createStore()

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

// export default replaceRenderer

import React from 'react'
import { Provider } from 'react-redux'

import createStore from './src/state/state'
const store = createStore()

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}
