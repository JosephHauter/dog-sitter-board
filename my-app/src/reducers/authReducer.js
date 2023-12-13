// authReducer.js
import { SET_USER, CLEAR_USER, AUTH_LOADING, AUTH_ERROR } from '../actions/actionTypes';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case CLEAR_USER:
      return {
        ...state,
        user: null,
      };
    case AUTH_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
