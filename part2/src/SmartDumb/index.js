import React,{ Component } from 'react'
import CounterContainer from './CounterContainer'
import SummaryContainer from './SummaryContainer'

class ControlPanel extends Component {
  render () {
    return (
      <div>
        <h5>容器组件和傻瓜组件</h5>
        <CounterContainer caption='First' />
        <CounterContainer caption='Second' />
        <CounterContainer caption='Third' />
        <SummaryContainer />
      </div>
    )
  }
}
export default ControlPanel
