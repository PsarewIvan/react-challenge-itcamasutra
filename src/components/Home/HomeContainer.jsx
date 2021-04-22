import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import Home from './Home';
import {
  changeEmail,
  changePassword,
  changeAuthorize,
  changeUserId,
} from './../../redux/auth-reducer';

class HomeContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          this.props.changeAuthorize(true);
          this.props.changeUserId(response.data.data.id);
        }
      });
  }

  render() {
    return <Home {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthorized: state.auth.isAuthorized,
    userId: state.auth.userId,
    buttonSubmitText: state.auth.buttonSubmitText,
    emailPlaceholder: state.auth.emailPlaceholder,
    passwordAriaText: state.auth.passwordAriaText,
    passwordPlaceholder: state.auth.passwordPlaceholder,
    emailAriaText: state.auth.emailAriaText,
    emailMessageText: state.auth.emailMessageText,
    passwordMessageText: state.auth.passwordMessageText,
  };
};

export default connect(mapStateToProps, {
  changeEmail,
  changePassword,
  changeAuthorize,
  changeUserId,
})(HomeContainer);
