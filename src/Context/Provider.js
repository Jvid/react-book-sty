import { Component} from 'react'
import PropTypes from 'prop-types'

class Provider extends Component {
  getChildContext() {
    return {store: this.props.store}
  }
  render() {
    return this.props.children
  }
}

/* 为了让Provider能够被react认可为一个Context的提供者，还需要指定P人Ovid而的childContextTypes属性 */
Provider.childContextType = { 
  store: PropTypes.object
}

export default Provider