import axios from 'axios'
import config from '../../config-env'


import {
    GET_ALL_SKETCH_PENDING,
    GET_ALL_SKETCH_FULFILLED,
    GET_ALL_SKETCH_REJECTED,
  } from '../_redux/types';

const initialState = {
  sketch: [],
  error: null,
  isLoading: true,
}

const sketch = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SKETCH_PENDING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case GET_ALL_SKETCH_FULFILLED:
      return {
        ...state,
        sketch: action.payload,
        isLoading: action.isLoading,
      };
    case GET_ALL_SKETCH_REJECTED:
      return {
        ...state,
        error: action.payload,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
}

export default sketch