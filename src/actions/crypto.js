import axios from 'axios'
import _ from 'lodash'
import firebase, {db} from '../firebase'

export const getCryptoList = () => async dispatch => {
  const result = await axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=0')
  const coinArray = result.data
  const res = coinArray.map((coin) => {
    return _.pick(coin, 'id', 'name', 'symbol')
  })
  dispatch({type: 'FETCH_LIST', payload: res})
}

export const addToWatchList = (symbol) => (dispatch, getState) => {
  const user = getState().auth.userData.email
  const document = db.collection('users').doc(user).collection('watchlist').doc(user)
  
  document.get()
    .then(doc => {
      const prevObj = doc.data().watchListObj
      const addObj = {}
      addObj[symbol] = []
      const newObj = Object.assign({}, prevObj, addObj)

      //add to db
      db.collection('users').doc(user).collection('watchlist').doc(user).update({
        'watchListObj': { ...newObj}
      }).then(() => {
        dispatch(loadWatchList())
      })
    })
}

export const removeFromWatchList = (symbol) => (dispatch, getState) => {
  const user = getState().auth.userData.email
  const ref = db.collection('users').doc(user).collection('watchlist').doc(user)
  
  ref.get()
    .then(doc => {
      const prevObj = doc.data().watchListObj
      delete prevObj[symbol]
      const newObj = Object.assign({}, prevObj)

      db.collection('users').doc(user).collection('watchlist').doc(user).update({
        'watchListObj': { ...newObj}
      }).then(() => {
        dispatch(loadWatchList())
      })
    })
}

export const loadWatchList = () => (dispatch, getState) => {
  const user = getState().auth.userData.email
  const document = db.collection('users').doc(user).collection('watchlist').doc(user)
  document.get()
    .then(doc => {
      if(doc.exists){
        const watchList = doc.data().watchListObj
        dispatch({type: 'LOADWATCHLIST', watchList})
      } else {
        db.collection('users').doc(user).collection('watchlist').doc(user).set({
          watchListObj: {}
        })
      }
    })
}