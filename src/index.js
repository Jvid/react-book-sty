import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClickCounter from './ClickCounter';
// import registerServiceWorker from './registerServiceWorker'
import ControlPanel2 from './ControlPanel2'
import ControlPanel from './ControlPanel/index.js'
<<<<<<< HEAD
// import ControlPanelFlux from './ControlPanelFlux'
=======
import ControlPanelRedux from './ControlPanelRedux/index.js'
>>>>>>> cefb2be9a09f475e8a72056ea0d9331eb9a55369

ReactDOM.render(
  <div>
    <ClickCounter />
    <hr/>
    <ControlPanel />
    <hr/>
    <ControlPanel2 />
<<<<<<< HEAD
    {/* <ControlPanelFlux />  */}
=======
    <hr/>
    <ControlPanelRedux />
    <hr/>
>>>>>>> cefb2be9a09f475e8a72056ea0d9331eb9a55369
  </div>,
  document.getElementById("root")
);
