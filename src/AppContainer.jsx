import React from 'react';
import App from './App';
import { connect } from 'react-redux';
import { authMe } from './redux/auth-reducer';

class AppContainer extends React.Component {
  componentDidMount() {
    this.props.authMe();
  }

  render() {
    return <App />;
  }
}

export default connect(null, { authMe })(AppContainer);
