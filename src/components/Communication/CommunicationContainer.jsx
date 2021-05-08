import Communication from './Communication';
import withAuthRedirect from './../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { addMessage } from '../../redux/communication-reducer';

const mapStateToProps = (state) => {
  return {
    messages: state.communication.messages,
    dialogs: state.communication.dialogs,
    currentUserId: state.profile.currentUserId,
    users: state.users,
    photos: state.communication.photos,
  };
};

export default compose(
  connect(mapStateToProps, { addMessage }),
  withAuthRedirect
)(Communication);
