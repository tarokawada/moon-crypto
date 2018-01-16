const defaultState = {
  list: [],
  watchList: {}
}

function crypto(state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_LIST':
      return Object.assign({}, state, {
        list: action.payload
      })
    case 'ADD_WATCHLIST':
      return Object.assign({}, state, {
        watchList: [...state.watchList, action.id]
      })
    case 'REMOVE_WATCHLIST':
      return Object.assign({}, state, {
        watchList: (state.watchList).filter(id => id !== action.id)
      }) 
    case 'LOADWATCHLIST':
      return Object.assign({}, state, {
        watchList: action.watchList
      })
    default:
      return state
  }
}

export default crypto