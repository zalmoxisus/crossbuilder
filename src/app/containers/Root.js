import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Counter from '../components/Counter';
import * as counterActions from '../actions/counter';
import * as bgActions from 'browser-redux-bg/lib/actions/send';

function mapStateToProps(state) {
  return {
    state: state
  };
}

const mapDispatchToProps = { ...counterActions, ...bgActions};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
