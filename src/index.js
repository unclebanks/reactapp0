import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename='/'>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);