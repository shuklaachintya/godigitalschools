/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';
import './index.css';
import App from './App';
import store from './store';
import { KeycloakProvider } from './react-keycloak';


//keycloak init options for - localhost
let initOptions: any = {
  url: process.env.REACT_APP_KEYCLOAK_URI, realm: process.env.REACT_APP_REALM, clientId: process.env.REACT_APP_CLIENT, onLoad: 'login-required'
}

const rootElement = document.getElementById('root');

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <KeycloakProvider
      initOptions={initOptions}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </KeycloakProvider>
  </ThemeProvider>,
  rootElement);