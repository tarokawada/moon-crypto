import axios from 'axios'
 
export function addNumber(number){
  return{
    type: 'ADD',
    number
  }
}

export function minusNumber(number){
  return{
    type: 'MINUS',
    number
  }
}

export const getPrice = (coin) => async dispatch => {
  const res = await axios.get(`https://api.coinmarketcap.com/v1/ticker/${coin}/`)
  dispatch({type: 'FETCH_PRICE', payload: res.data})
}