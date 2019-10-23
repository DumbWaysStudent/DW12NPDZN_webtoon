import {
    fetchData,
    fetchDataFulfilled,
    fetchDataRejected,
  } from '../_actions/fav';
import axios from 'axios'
import config from '../../config-env'


export const getFav = (id, token) => {

    return dispatch => {
      dispatch(fetchData(true));
      axios({
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${token}`
          },
        url: `${config.API_URL}/user/${id}/favorites`
      }).then(res => {
        dispatch(fetchDataFulfilled(res.data))
      })
      .catch(error => {
        dispatch(fetchDataRejected(error));
      });
    }
  }
  
  export default getFav