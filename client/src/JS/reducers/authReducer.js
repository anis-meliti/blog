import {
  REGISTER_USER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_USER,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  AUTH_USER,
  AUTH_FAIL,
  AUTH_SUCCESS,
} from '../constants/actions-types';

const initialState = {
  isLoading: false,
  isAuth: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: payload,
      };
    case AUTH_USER:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isLaoding: false,
        isAuth: true,
        user: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
