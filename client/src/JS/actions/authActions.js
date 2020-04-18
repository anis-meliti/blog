import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_USER,
  REGISTER_FAIL,
} from '../constants/actions-types';

export const register = (userCred) => async (dispatch) => {
  dispatch({
    type: REGISTER_USER,
  });
  try {
    const registerRes = await axios.post('/user/register', userCred);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: registerRes.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.errors,
    });
  }
};
