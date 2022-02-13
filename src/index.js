import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import ContextDataFromServer from './context/ContextDataFromServer';
import reportWebVitals from './reportWebVitals';
import Context from './context/Context';

ReactDOM.render(
  <BrowserRouter>
      <Context>
        <ContextDataFromServer>
            <App />
        </ContextDataFromServer>
      </Context>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
