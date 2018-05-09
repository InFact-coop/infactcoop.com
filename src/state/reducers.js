const menuReducer = (state, action) => {
  if (action.type === `TOGGLE_MENU`) {
    return { ...state, menuIsOpen: !state.menuIsOpen }
  }
  return state
}

export default { menuReducer }
