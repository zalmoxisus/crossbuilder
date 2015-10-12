import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Counter from '../components/Counter';
import * as counterActions from '../actions/counter';
import * as commandsActions from '../actions/bg/send';

function mapStateToProps(state) {
  return {
    state: state
  }
}

const mapDispatchToProps = { ...counterActions, ...commandsActions};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
