import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_USER,
  REGISTER_FAIL,
  LOGIN_USER,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
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

export const logIn = (userCerd) => async (dispatch) => {
  dispatch({
    type: LOGIN_USER,
  });
  try {
    const logRes = await axios.post('/user/login', userCerd);
    localStorage.setItem('token', logIn.data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: logRes.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.errors,
    });
  }
};
