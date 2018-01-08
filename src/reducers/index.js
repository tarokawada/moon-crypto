import { combineReducers } from 'redux'

import calculations from './calculations'
import crypto from './crypto'

export default combineReducers({
  calculations,
  crypto
})