function alertReducer(state = true, action) {
  switch(action.type) {
    case 'CLICK':
      return !state
    default:
      return state
  }
}

export default alertReducer