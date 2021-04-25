import { connect } from 'react-redux';
import Nav from './Nav';

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    isAuthorized: state.auth.isAuthorized,
  };
};

export default connect(mapStateToProps)(Nav);
