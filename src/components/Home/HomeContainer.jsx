import React from 'react';
import Home from './Home';
import { connect } from 'react-redux';
import { changeEmail, changePassword } from './../../redux/auth-reducer';

class HomeContainer extends React.Component {
  render() {
    return <Home {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    buttonSubmitText: state.auth.buttonSubmitText,
    emailPlaceholder: state.auth.emailPlaceholder,
    passwordAriaText: state.auth.passwordAriaText,
    passwordPlaceholder: state.auth.passwordPlaceholder,
    emailAriaText: state.auth.emailAriaText,
    emailMessageText: state.auth.emailMessageText,
    passwordMessageText: state.auth.passwordMessageText,
  };
};

export default connect(mapStateToProps, { changeEmail, changePassword })(
  HomeContainer
);
