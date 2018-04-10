import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClickCounter from './ClickCounter';
import registerServiceWorker from './registerServiceWorker';
import ControlPanel from './ControlPanel/index.js'

ReactDOM.render(
  <div>
    <ClickCounter />
    <ControlPanel />
  </div>

, document.getElementById('root'));
registerServiceWorker();
