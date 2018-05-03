import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import ControlPanel from './Context/index';
import Provider from './Context/Provider';
import store from './Context/Store'

ReactDOM.render(
  <Provider store={store}>
    <ControlPanel />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
