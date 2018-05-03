import React,{Component} from 'react'
import './counter.css'

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: this.props.initValue
    }
    this.onDecrement = this.onDecrement.bind(this)
    this.onIncrement = this.onIncrement.bind(this)
  }
  onDecrement(){
    this.updateValue(false)
  }
  onIncrement(){
    this.updateValue(true)
  }
  updateValue(isIncrement){
    const previousValue = this.state.value
    const newValue = isIncrement ? this.state.value + 1 : this.state.value - 1
    this.setState({value: newValue})
    this.props.onUpdate(newValue,previousValue)
  }
  render(){
    return(
      <div className='counter-wrap'>
        <span className="decrement" onClick={this.onDecrement}>-</span>
        <span className="num">{this.state.value}</span>
        <span className="increment" onClick={this.onIncrement}>+</span>
      </div>
    )
  }
}

export default Counter