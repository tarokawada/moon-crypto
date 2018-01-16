const defaultState = {
  
}

function auth(state = defaultState, action) {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, {
        user: action.authResponse
      })
    case 'LOGOUT':
      return {}
    case 'LOADUSERDATA':
      return Object.assign({}, state, {
        userData: action.res
      })
    default:
      return state
  }
}

export default auth