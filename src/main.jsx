import React from 'react';
import ReactDOM from 'react-dom/client'; // Update here
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from '../src/redux/Store'
const root = ReactDOM.createRoot(document.getElementById('root')); // Update here
root.render(
  <BrowserRouter>
   <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>
);
