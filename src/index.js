import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './containers/App/App';


import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../src/reducers';

import { BrowserRouter } from 'react-router-dom';

const devTools = 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);


render(
  <Provider store={ store } >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);