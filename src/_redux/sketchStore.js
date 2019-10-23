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

export default getAllSketch