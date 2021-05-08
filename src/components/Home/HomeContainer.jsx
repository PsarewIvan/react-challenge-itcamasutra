import Home from './Home';
import { connect } from 'react-redux';
import {
  changeEmailText,
  changePasswordText,
} from './../../redux/auth-reducer';

const mapStateToProps = (state) => {
  return {
    isAuthorized: state.auth.isAuthorized,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps, {
  changeEmailText,
  changePasswordText,
})(Home);
