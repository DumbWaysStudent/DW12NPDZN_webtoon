import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger, thunk } from './middleware'

import sketch from '../_reducers/sketch'
import favorite from '../_reducers/fav'


const reducers = combineReducers({
  sketch,
  favorite
})
  
const store = createStore(
  reducers,
  applyMiddleware(logger, thunk));

export default store

