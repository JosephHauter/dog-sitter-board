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
      return response.data; // Return the response data for further processing
    } else {
      dispatch(setError(response.data.message || 'Invalid credentials'));
      return null; // Return null to indicate an unsuccessful login
    }
  } catch (error) {
    dispatch(setError(error.response?.data?.message || 'Login failed'));
    return null; // Return null to indicate an error occurred
  } finally {
    dispatch(setLoading(false));
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('loggedInUser');
  dispatch(clearUser());
};
