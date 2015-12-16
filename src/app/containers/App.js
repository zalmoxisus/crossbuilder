import { connect } from 'react-redux';

import Counter from '../components/Counter';
import * as counterActions from '../actions/counter';

function mapStateToProps(state) {
  return { state };
}

const mapDispatchToProps = counterActions; // { ...counterActions, ...};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
