import { connect } from 'react-redux';

import Counter from '../components/Counter';
import * as counterActions from '../actions/counter';
import { bgActions } from 'browser-redux-bg';

function mapStateToProps(state) {
  return {
    state: state
  };
}

const mapDispatchToProps = { ...counterActions, ...bgActions};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
