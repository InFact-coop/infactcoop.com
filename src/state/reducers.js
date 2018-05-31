const menuReducer = (state, action) => {
  if (action.type === `TOGGLE_MENU`) {
    const newMenuState =
      state.menuIsOpen === 'INIT' || state.menuIsOpen === 'CLOSED'
        ? 'OPENED'
        : 'CLOSED'

    return { ...state, menuIsOpen: newMenuState }
  }
  return state
}

export default { menuReducer }
