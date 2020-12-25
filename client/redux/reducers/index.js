import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import create from './createSquare'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    create
  })

export default createRootReducer
