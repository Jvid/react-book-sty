import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import ClickCounter from './ClickCounter';
// import registerServiceWorker from './registerServiceWorker'
// import ControlPanel2 from './ControlPanel2'
// import ControlPanel from './ControlPanel/index.js'
// import ControlPanelRedux from './ControlPanelRedux/index.js'
// import SmartDumbRedux from './SmartDumbRedux/index.js'
import Provider from './Context/Provider'
import Context from './Context/index';
import store from './Context/Store';

// ReactDOM.render(
//   <div>
//     <ClickCounter />
//     <hr/>
//     <ControlPanel />
//     <hr/>
//     <ControlPanel2 />
//     <hr/>
//     <ControlPanelRedux />
//     <hr/>
//     <SmartDumbRedux />
//   </div>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <div>
    <Provider store={store}>
      <Context />
    </Provider>
  </div>,
  document.getElementById("root")
);