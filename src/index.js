import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider, ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './css/style.scss';
import doggieDataReducer from './store/reducers/index';
//import DoggieDataContext from './context/doggie-data-context';
// theme ---------------------------------------------------------------
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#B69593',
      main: '#553635',
      contrastText: '#FCEFD5'
    }
  }
});

// redux ---------------------------------------------------------------

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const rootReducer = doggieDataReducer;

const store = createStore(rootReducer, composeEnhancers());

const app = (
  <Provider store={store}>
    <BrowserRouter>
      {/* <MuiThemeProvider theme={theme}> */}
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      {/* </MuiThemeProvider> */}
    </BrowserRouter>
  </Provider>
);

ReactDOM.render( app, document.getElementById('root') );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
