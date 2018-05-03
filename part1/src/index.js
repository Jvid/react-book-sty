import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClickCounter from './ClickCounter';
// import registerServiceWorker from './registerServiceWorker'
import ControlPanel2 from './ControlPanel2'
import ControlPanel from './ControlPanel/index.js'
// import ControlPanelFlux from './ControlPanelFlux'
import ControlPanelRedux from './ControlPanelRedux/index.js'
import SmartDumb from './SmartDumb/index.js'

ReactDOM.render(
  <div>
    <ClickCounter />
    <hr/>
    <ControlPanel />
    <hr/>
    <ControlPanel2 />
    <hr/>
    <ControlPanelRedux />
    <hr/>
    <SmartDumb />
  </div>,
  document.getElementById("root")
);
