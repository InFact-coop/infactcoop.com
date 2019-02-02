import { TOGGLE_MENU } from './actions'

const menuReducer = (state, { type, payload }) => {
  switch (type) {
    case TOGGLE_MENU:
      return toggleMenu(state, payload)
    default:
      return state
  }
}

const handleTouchEvent = e => {
  e.preventDefault()
}

const disableScroll = () => {
  document.body.style.overflowY = 'hidden'
  return document.addEventListener('touchmove', handleTouchEvent, {
    passive: false,
  })
}

const enableScroll = () => {
  document.body.style.overflowY = 'visible'
  return document.removeEventListener('touchmove', handleTouchEvent, {
    passive: false,
  })
}

const toggleMenu = (state, payload) => {
  switch (true) {
    case payload && payload.pageChange:
      enableScroll()
      return { ...state, menuIsOpen: 'INIT' }

    case state.menuIsOpen === 'INIT':
      disableScroll()
      return { ...state, menuIsOpen: 'OPENED' }

    case state.menuIsOpen === 'CLOSED':
      disableScroll()
      return { ...state, menuIsOpen: 'OPENED' }

    default:
      enableScroll()
      return { ...state, menuIsOpen: 'CLOSED' }
  }
}

export default menuReducer
