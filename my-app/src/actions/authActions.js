// authActions.js
import { SET_USER, CLEAR_USER, AUTH_LOADING, AUTH_ERROR } from './actionTypes';
import axios from 'axios';

export const setUser = (userData) => ({
  type: SET_USER,
  payload: userData,
});

export const clearUser = () => ({
  type: CLEAR_USER,
});

export const setLoading = (loading) => ({
  type: AUTH_LOADING,
  payload: loading,
});

export const setError = (error) => ({
  type: AUTH_ERROR,
  payload: error,
});

export const login = (username, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.post('http://localhost:5000/login', { username, password });
    if (response.data.success) {
      dispatch(setUser(response.data.user));
      localStorage.setItem('loggedInUser', JSON.stringify(response.data.user));
    } else {
      dispatch(setError('Invalid credentials'));
    }
  } catch (error) {
    dispatch(setError('Login failed'));
  } finally {
    dispatch(setLoading(false));
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('loggedInUser');
  dispatch(clearUser());
};
