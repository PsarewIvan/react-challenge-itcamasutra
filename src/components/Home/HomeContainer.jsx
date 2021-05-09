import Home from './Home';
import { connect } from 'react-redux';
import { login } from './../../redux/auth-reducer';

const mapStateToProps = (state) => {
  return {
    isAuthorized: state.auth.isAuthorized,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { login })(Home);
