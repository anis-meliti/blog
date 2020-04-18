import {
  REGISTER_USER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../constants/actions-types';

const initialState = {
  isLoading: false,
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
    default:
      return state;
  }
};

export default authReducer;
