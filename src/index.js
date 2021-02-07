import React from 'react';
import ReactDOM from 'react-dom';

import './stylesReset.css'
import './global.css'

import App from './components/App';

import AppContextProvider from './contexts/app'

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);