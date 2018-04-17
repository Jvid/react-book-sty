import React,{Component} from 'react'
import './Counter.css'

class Counter extends Component{
  constructor(props){
    super(props)
    this.onClickIncrementButton = this.onClickIncrementButton.bind(this)
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this)
    this.state = {
      count: this.props.initValue
    }
  }
  onClickIncrementButton(e) {
    this.updateCount(true)
  }
  onClickDecrementButton(e) {
    this.updateCount(false)
  }
  updateCount(isIncrement) {
    const previousValue = this.state.count
    const newValue = isIncrement ? previousValue + 1 : previousValue - 1
    this.setState({count: newValue})
    this.props.onUpdate(newValue,previousValue)
  }
  render(){
    return(
    <div>
      <span className='click-button' onClick={this.onClickIncrementButton}>+</span>
      <span>{this.state.count}</span>
      <span className='click-button' onClick={this.onClickDecrementButton}>-</span>
    </div>)
  }
}

export default Counter