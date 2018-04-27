import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClickCounter from './ClickCounter';
// import registerServiceWorker from './registerServiceWorker'
import ControlPanel2 from './ControlPanel2'
import ControlPanel from './ControlPanel/index.js'
// import ControlPanelFlux from './ControlPanelFlux'

ReactDOM.render(
  <div>
    <ClickCounter />
    <ControlPanel />
    <ControlPanel2 />
    {/* <ControlPanelFlux />  */}
  </div>,
  document.getElementById("root")
);
