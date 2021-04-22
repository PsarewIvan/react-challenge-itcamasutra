import React from 'react';
import Home from './Home';
import { connect } from 'react-redux';

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
  };
};

export default connect(mapStateToProps)(HomeContainer);
