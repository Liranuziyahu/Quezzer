import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import ContextCandidates from './context/ContextDataFromServer';
import reportWebVitals from './reportWebVitals';
import Context from './context/Context';

ReactDOM.render(
  <BrowserRouter>
  <Context>
    <ContextCandidates>
        <App />
    </ContextCandidates>
  </Context>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
