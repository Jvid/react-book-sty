import React,{ Component } from 'react'
import Counter from './Counter'

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
        <Counter initValue={this.initValues[0]} onUpdate={this.updateCount}/>
        <Counter initValue={this.initValues[1]} onUpdate={this.updateCount}/>
        <Counter initValue={this.initValues[2]} onUpdate={this.updateCount}/>
        <div>
          Total Counts: {this.state.sum}
        </div>
      </div>
    )
  }
}
export default ControlPanel
