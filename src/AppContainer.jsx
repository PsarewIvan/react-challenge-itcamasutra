import React from 'react';
import App from './App';
import { connect } from 'react-redux';
import { changeAuthorize, setUserId } from './redux/auth-reducer';
import { AuthAPI } from './api/api';

class AppContainer extends React.Component {
  componentDidMount() {
    AuthAPI.getCurrentUser().then((data) => {
      if (data.resultCode === 0) {
        this.props.changeAuthorize(true);
        this.props.setUserId(data.data.id);
      }
    });
  }

  render() {
    return <App />;
  }
}

export default connect(null, { changeAuthorize, setUserId })(AppContainer);
