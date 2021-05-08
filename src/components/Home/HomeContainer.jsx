import Home from './Home';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    isAuthorized: state.auth.isAuthorized,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps)(Home);
