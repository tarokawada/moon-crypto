import axios from 'axios'
import _ from 'lodash'

export const getCryptoList = () => async dispatch => {
  const result = await axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=0')
  const coinArray = result.data
  const res = coinArray.map((coin) => {
    return _.pick(coin, 'id', 'name', 'symbol')
  })
  dispatch({type: 'FETCH_LIST', payload: res})
}

export const addToWatchList = (symbol, id) => {
  const listItem = {
    symbol,
    id
  }
  return {
    type: 'ADD_WATCHLIST',
    listItem
  }
}

export const removeFromWatchList = (id) => {
  return {
    type: 'REMOVE_WATCHLIST',
    id
  }
}