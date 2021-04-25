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
  changeEmailText,
  changePasswordText,
})(Home);
