import React,{Component} from 'react'
import './counter.css'
import Actions from './Action'
import CounterStore from '../stores/CounterStore'

class Counter extends Component {
  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this)
    this.onClickIncrementButton = this.onClickIncrementButton.bind(this)
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this)
    this.state = {
      count: CounterStore.getCounterValues()[props.caption]
    }
  }
  onClickIncrementButton() {
    Actions.increment(this.props.caption)
  }
  onClickDecrementButton() {
    Actions.decrement(this.props.caption)
  }
  onChange() {
    const newCount = CounterStore.getCounterValues()[this.props.caption]
    this.setState({count: newCount})
  }
  componentDidMount() {
    CounterStore.addChangeListener(this.onChange)
  }
  componentWillUnmount() {
    CounterStore.removeChangeListener(this.onChange)
  }
  render(){
    // const {caption} = this.props
    return(
      <div className='counter-wrap'>
        <span className="decrement" onClick={this.onClickDecrementButton}>-</span>
        <span className="num">{this.state.count}</span>
        <span className="increment" onClick={this.onClickIncrementButton}>+</span>
      </div>
    )
  }
}

export default Counter