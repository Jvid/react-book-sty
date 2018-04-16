import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClickCounter from './ClickCounter';
import registerServiceWorker from './registerServiceWorker'
import ControlPanel2 from './ControlPanel2'

ReactDOM.render(
  <div>
    <ClickCounter />
    <ControlPanel2 />
  </div>,
  document.getElementById("root")
);
registerServiceWorker();
