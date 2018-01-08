const defaultState = {
  number: 0,
  name: 'Search',
  price_usd: 0,
  price_btc: 0
}

function calculations(state = defaultState, action) {
  switch (action.type) {
    case 'ADD':
      return Object.assign({}, state, {
        number: action.number + 1
      })
    case 'MINUS':
      return Object.assign({}, state, {
        number: action.number - 1
      })
    case 'FETCH_PRICE':
      return Object.assign({}, state, {
        name: action.payload[0].name,
        price_usd: action.payload[0].price_usd,
        price_btc: action.payload[0].price_btc,
      })
    default:
      return state
  }
}

export default calculations