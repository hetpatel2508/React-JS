import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import rootReduser from './Services/Reducers/index.js';
const Store = createStore(rootReduser);
//

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Provider store={Store}>
    <App />
  </Provider>
)
