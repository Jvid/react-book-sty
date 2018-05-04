import Summary from './Summary.js'
import { connect } from 'react-redux';

function mapStateToProps(state) {
  let sum = 0;
  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      sum += state[key];
    }
  }
  return { sum: sum };
}

export default connect(mapStateToProps)(Summary);