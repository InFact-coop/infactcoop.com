import { TOGGLE_MENU } from './actions'

const menuReducer = (state, { type, payload }) => {
  switch (type) {
    case TOGGLE_MENU:
      document.body.style.overflowY === 'hidden'
        ? (document.body.style.overflowY = 'visible')
        : (document.body.style.overflowY = 'hidden')
      return toggleMenu(state, payload)
    default:
      return state
  }
}

const toggleMenu = (state, payload) => {
  if (payload && payload.pageChange) return { ...state, menuIsOpen: 'INIT' }

  const newMenuState =
    state.menuIsOpen === 'INIT' || state.menuIsOpen === 'CLOSED'
      ? 'OPENED'
      : 'CLOSED'

  return { ...state, menuIsOpen: newMenuState }
}

export default menuReducer 
