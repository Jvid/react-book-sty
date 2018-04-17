import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClickCounter from './ClickCounter';
import registerServiceWorker from './registerServiceWorker'
import ControlPanel2 from './ControlPanel2'
import ControlPanel from './ControlPanel/index.js'

ReactDOM.render(
  <div>
    <ClickCounter />
    <ControlPanel />
    <ControlPanel2 />
  </div>,
  document.getElementById("root")
);
