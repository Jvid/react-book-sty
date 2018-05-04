import Counter from './Counter.js';
import * as Actions from '../Action.js';
import {connect} from 'react-redux';

function mapStateToProps(state, ownProps) {
  return {
    value: state[ownProps.caption]
  }
}

function mapDispatchToProps(dispatch,ownProps) {
  return {
    onIncrement: () => {
      dispatch(Actions.increment(ownProps.caption))
    },
    onDecrement: () => {
      dispatch(Actions.decrement(ownProps.caption))      
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);