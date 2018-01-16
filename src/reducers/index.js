import { combineReducers } from 'redux'

import crypto from './crypto'
import auth from './auth'

export default combineReducers({
  crypto,
  auth
})