import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Home from './Home';

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
