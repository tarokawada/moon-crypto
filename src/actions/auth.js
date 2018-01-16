import firebase, { db } from '../firebase'
import { loadWatchList } from '../actions/crypto.js'

export const login = (username, password) => async dispatch => {
  const res = await firebase.auth().signInWithEmailAndPassword(username, password)
  db.collection("users").doc(username.toLowerCase()).set({
    email: username.toLowerCase()
  }).then(() => {
    dispatch({ type: 'LOGIN', authResponse: res })
  }).then(() => {
    dispatch(loadUserData(username.toLowerCase()))
  }).catch(err => {
    console.log(err)
  })
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}

export const signUp = (username, password) => async dispatch => {
  try {
    const res = await firebase.auth().createUserWithEmailAndPassword(username, password)
    if(res){
      dispatch(login(username,password))
    }
  } catch(error) {
    console.log(error)
  }  
}

const loadUserData = (username) => dispatch => {
  const document = db.collection('users').doc(username)
  document.get().then(doc => {
    dispatch({ type: 'LOADUSERDATA', res: doc.data() })
  }).then(() => {
    dispatch(loadWatchList())
  }).catch(error => {
    console.log(error)
  })
}