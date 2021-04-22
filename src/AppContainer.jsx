import React from 'react';
import App from './App';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { changeAuthorize, setUserId } from './redux/auth-reducer';

class AppContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          this.props.changeAuthorize(true);
          this.props.setUserId(response.data.data.id);
        }
      });
  }

  render() {
    return <App />;
  }
}

export default connect(null, { changeAuthorize, setUserId })(AppContainer);
