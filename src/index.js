import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

ReactDOM.render(
  <React.StrictMode>
  <GlobalStyle></GlobalStyle>
    <App />
  </React.StrictMode>
 
 ,
  document.getElementById('root')
);