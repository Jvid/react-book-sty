import React,{Component} from 'react'
import Counter from './Counter.js'
import store from './Store.js'
import * as Actions from './Action.js'

class CounterContainer extends Component {
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
  render() {
    return <Counter caption={this.props.caption}
      onIncrement={this.onIncrement}
      onDecrement={this.onDecrement}
      value={this.state.value}
      />
  }
}

export default CounterContainer