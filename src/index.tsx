import './index.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import Desktop from './pages/desktop';
import reportWebVitals from './reportWebVitals';
import { getDPR } from './utils';
import { getBGColor } from './scripts/init_phase';


getDPR()
getBGColor()

ReactDOM.render(
  <React.StrictMode>
    <Desktop />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
