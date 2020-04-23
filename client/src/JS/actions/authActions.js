import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_USER,
  REGISTER_FAIL,
  LOGIN_USER,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  AUTH_USER,
  AUTH_FAIL,
  AUTH_SUCCESS,
} from '../constants/actions-types';
import setAuthToken from '../../utils/setAuthToken';

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
    localStorage.setItem('token', logRes.data.token);
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

export const isAuth = () => async (dispatch) => {
  const token = localStorage.getItem('token');

  setAuthToken(token);
  dispatch({
    type: AUTH_USER,
  });
  try {
    const authRes = await axios.get('/user/current');
    dispatch({
      type: AUTH_SUCCESS,
      payload: authRes.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_FAIL,
      // payload: error.response.data.errors,
    });
  }
};
