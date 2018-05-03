import React,{Component} from 'react'
import store from './Store.js'
import Summary from './Summary.js'

class SummaryContainer extends Component {
  constructor(props){
    super(props)
    this.state = this.getOwnState()
    this.onChange = this.onChange.bind(this)
  }
  getOwnState() {
    const state = store.getState()
    let sum = 0
    for(const key in state) {
      if(state.hasOwnProperty(key)) {
        sum += state[key]
      }
    }
    return {sum: sum}
  }
  onChange() {
    this.setState(this.getOwnState())
  }
  componentDidMount() {
    store.subscribe(this.onChange)
  }
  componentWillUnmount() {
    store.unsubscribe(this.onChange)
  }
  render(){
    return(
      <div className='counter-wrap'>
        <Summary sum={this.state.sum} />
      </div>
    )
  }
}

export default SummaryContainer