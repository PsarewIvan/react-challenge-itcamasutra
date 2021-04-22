import HomeContainer from './components/Home/HomeContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Content from './components/Content/Content';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
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

export default App;
