import Header from './Header';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    userName: state.header.currentUser.name,
    userStatus: state.header.currentUser.status,
    userConnections: state.header.userConnections,
    photos: state.header.photos,
  };
};

export default connect(mapStateToProps)(Header);
