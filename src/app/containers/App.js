import { connect } from 'react-redux';

import Alternative from '../components/Alternatives';
import * as alternativesActions from '../actions/offers';

function mapStateToProps(state) {
  return { state };
}

const mapDispatchToProps = alternativesActions; // { ...counterActions, ...};

export default connect(mapStateToProps, mapDispatchToProps)(Alternative);
