import ProfileContainer from './components/Profile/ProfileContainer';
import Content from './components/Content/Content';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app__wrapper">
      <Route path="/profile/:userId">
        <main className="app__profile">
          <ProfileContainer />
        </main>
      </Route>
      <Route path="/content">
        <div className="app__content">
          <Content />
        </div>
      </Route>
    </div>
  );
}

export default App;
