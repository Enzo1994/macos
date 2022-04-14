import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import Desktop from "./pages/desktop";
import reportWebVitals from "./reportWebVitals";
import { getDPR } from "./utils";
import { store, StoreContext } from "./store/store";
// import { getBGColor } from './scripts/init_phase';

getDPR();
// getBGColor()

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <Desktop />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
