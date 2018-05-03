import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Counter from './Counter.js'
// import store from './Store.js'
import * as Actions from './Action.js'

class CounterContainer extends Component {
  constructor(){
    super(...arguments)
    this.state = this.getOwnState()
    this.onDecrement = this.onDecrement.bind(this)
    this.onIncrement = this.onIncrement.bind(this)
    this.getOwnState = this.getOwnState.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  getOwnState() {
    return {
      value: this.context.store.getState()[this.props.caption]
    }
  }
  onChange() {
    // this.getOwnState()
    // // const value = this.getOwnState()[this.props.caption]
    this.setState(this.getOwnState())
  }
  onDecrement(){
    this.context.store.dispatch(Actions.decrement(this.props.caption))
  }
  onIncrement(){
    this.context.store.dispatch(Actions.increment(this.props.caption))
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.caption !== this.props.caption) ||
      (nextState.value !== this.state.value);
  }
  componentDidMount() {
    this.context.store.subscribe(this.onChange)
  }
  componentWillUnmount() {
    this.context.store.unsubscribe(this.onChange)
  }
  render() {
    return <Counter caption={this.props.caption}
      onIncrement={this.onIncrement}
      onDecrement={this.onDecrement}
      value={this.state.value}
      />
  }
}

CounterContainer.contextTypes = {
  store: PropTypes.object
}

export default CounterContainer