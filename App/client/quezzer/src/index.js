import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import ContextDataFromServer from './context/ContextDataFromServer';
import reportWebVitals from './reportWebVitals';
import Context from './context/Context';
import ContextServer from './context/index'

ReactDOM.render(
  <BrowserRouter>
  <ContextServer>
      <Context>
        <ContextDataFromServer>
            <App />
        </ContextDataFromServer>
      </Context>
  </ContextServer>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
