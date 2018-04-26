import React,{Component} from 'react'
import './counter.css'
import store from './Store.js'
import * as Actions from './Action.js'

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = this.getOwnState()
    this.onDecrement = this.onDecrement.bind(this)
    this.onIncrement = this.onIncrement.bind(this)
    this.getOwnState = this.getOwnState.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  getOwnState() {
    return {
      value: store.getState()[this.props.caption]
    }
  }
  onChange() {
    // this.getOwnState()
    // // const value = this.getOwnState()[this.props.caption]
    this.setState(this.getOwnState())
  }
  onDecrement(){
    store.dispatch(Actions.decrement(this.props.caption))
  }
  onIncrement(){
    store.dispatch(Actions.increment(this.props.caption))
  }
  componentDidMount() {
    store.subscribe(this.onChange)
  }
  componentWillUnmount() {
    store.unsubscribe(this.onChange)
  }
  render(){
    const value = this.state.value
    // const {caption} = this.props
    return(
      <div className='counter-wrap'>
        <span className="decrement" onClick={this.onDecrement}>-</span>
        <span className="num">{value}</span>
        <span className="increment" onClick={this.onIncrement}>+</span>
      </div>
    )
  }
}

export default Counter