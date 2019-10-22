import { createStore, combineReducers, applyMiddleware } from 'redux';

import sketch from '../_reducers/sketch'
import { logger, thunk } from './middleware'
import {
  fetchData,
  fetchDataFulfilled,
  fetchDataRejected,
} from '../_actions/sketch';
import axios from 'axios'
import config from '../../config-env'


export const getAllSketch = () => {
  return dispatch => {
    dispatch(fetchData(true));
    axios({
      method: 'GET',
      url: `${config.API_URL}/sketches`
    }).then(res => {
      dispatch(fetchDataFulfilled(res.data))
    })
    .catch(error => {
      dispatch(fetchDataRejected(error));
    });
  }
}


const reducers = combineReducers({
  sketch
})
  
const store = createStore(
  reducers,
  applyMiddleware(logger, thunk));

export default store

