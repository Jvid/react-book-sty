import React,{ Component } from 'react'
import Counter from './Counter'
import Summary from './Summary';
class ControlPanel extends Component {
  constructor(props){
    super(props)
    this.initValues = [1,10,20]
    const initSum = this.initValues.reduce((a,b)=>a+b,0)
    this.state = {
      sum: initSum
    }
    this.updateCount = this.updateCount.bind(this)
  }
  updateCount(newValue,previousValue) {
    this.setState({sum: this.state.sum + (newValue - previousValue)})
  }
  render () {
    return (
      <div>
        <Counter caption="First" />
        <Counter caption="Second" />
        <Counter caption="Third" />
        <hr/>
        <Summary />
      </div>
    )
  }
}
export default ControlPanel
