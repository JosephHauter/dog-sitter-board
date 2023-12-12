import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container); // Create a root.

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
