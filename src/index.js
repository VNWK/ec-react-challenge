import React from 'react';
import ReactDOM from 'react-dom';

import './stylesReset.css'
import './global.css'

import App from './components/App';

import AppContextProvider from './contexts/app'
import FormContextProvider from './contexts/form'

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <FormContextProvider>
        <App />
      </FormContextProvider>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);