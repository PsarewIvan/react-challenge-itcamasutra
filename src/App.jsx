import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import HomeContainer from './components/Home/HomeContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Content from './components/Content/Content';
import Loader from './components/Loader/Loader';
import { initialize } from './redux/app-reducer';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.initialize();
  }

  render() {
    if (!this.props.isInitialize) {
      return <Loader />;
    } else {
      return (
        <div className="app__wrapper">
          <Route exact strict path="/">
            <main className="app__home">
              <HomeContainer />
            </main>
          </Route>
          <Route path="/profile/:userId">
            <main className="app__profile">
              <ProfileContainer />
            </main>
          </Route>
          <Route path="/content">
            <main className="app__content">
              <Content />
            </main>
          </Route>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  isInitialize: state.app.isInitialize,
});

export default compose(
  connect(mapStateToProps, { initialize }),
  withRouter
)(App);
