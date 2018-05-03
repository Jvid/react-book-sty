import React,{ Component } from 'react'
import Counter from './Counter'
import Summary from './Summary'

class ControlPanel extends Component {
  render () {
    return (
      <div>
        <h5>redux初识</h5>
        <Counter caption='First' />
        <Counter caption='Second' />
        <Counter caption='Third' />
        <Summary />
      </div>
    )
  }
}
export default ControlPanel
