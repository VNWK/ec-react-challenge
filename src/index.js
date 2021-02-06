import React from 'react';
import ReactDOM from 'react-dom';

import './stylesReset.css'
import './global.css'

import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);