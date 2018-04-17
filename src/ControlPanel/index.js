import React,{Component} from 'react'
import Counter from './Counter.js'

class ControlPanel extends Component {
  constructor(props){
    super(props)
    this.onUpdate = this.onUpdate.bind(this)
    this.initValues = [0,10,20]
    const initSum = this.initValues.reduce((a,b) => a+b,0)
    this.state = {
      sum: initSum
    }
  }
  onUpdate(newValue,previousValue) {
    console.log(newValue,previousValue)
    const valueChange = newValue - previousValue
    this.setState({sum: this.state.sum + valueChange})
  }
  render() {
    return (
      <div>
        <Counter initValue={this.initValues[0]} onUpdate={this.onUpdate}/>
        <Counter initValue={this.initValues[1]} onUpdate={this.onUpdate}/>
        <Counter initValue={this.initValues[2]} onUpdate={this.onUpdate}/>
        <div>
          total counts: <span>{this.state.sum}</span>
        </div>
      </div>
    )
  }
}

export default ControlPanel