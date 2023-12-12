import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';

// Function to safely parse JSON from localStorage
const safeParse = (item) => {
  try {
    return JSON.parse(item);
  } catch (error) {
    return null;
  }
};

// Retrieve the 'loggedInUser' item from local storage
const persistedState = safeParse(localStorage.getItem('loggedInUser'));

// Initialize state from local storage to persist login state
const preloadedState = persistedState ? { auth: { user: persistedState } } : {};

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState, // Pass the preloaded state as the initial state
});

export default store;
