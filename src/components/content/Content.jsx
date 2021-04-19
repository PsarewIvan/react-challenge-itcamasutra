import ProfileContainer from '../Profile/ProfileContainer';
import CommunicationContainer from '../Communication/CommunicationContainer';
import UsersContainer from '../Users/UsersContainer';
import Feed from '../Feed/Feed';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';
import { Route } from 'react-router-dom';
import './Content.css';

const Content = () => {
  return (
    <main className="content">
      <Route exact strict path="/" render={() => <ProfileContainer />} />
      <Route path="/communication" render={() => <CommunicationContainer />} />
      <Route path="/users" render={() => <UsersContainer />} />
      <Route exact path="/feed" render={() => <Feed />} />
      <Route exact path="/music" render={() => <Music />} />
      <Route exact path="/settings" render={() => <Settings />} />
    </main>
  );
};

export default Content;
