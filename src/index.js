import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './css/style.scss';
import { BrowserRouter } from 'react-router-dom';
//import DoggieDataContext from './context/doggie-data-context';

import doggieDataReducer from './store/reducers/index';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const rootReducer = doggieDataReducer;

console.log(rootReducer);

const store = createStore(rootReducer, composeEnhancers());

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render( app, document.getElementById('root') );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
