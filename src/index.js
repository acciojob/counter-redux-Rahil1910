import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from "./components/store/store.jsx"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
