import { connect } from 'react-redux';
import { logout } from './../../redux/auth-reducer';
import Nav from './Nav';

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    isAuthorized: state.auth.isAuthorized,
  };
};

export default connect(mapStateToProps, { logout })(Nav);
