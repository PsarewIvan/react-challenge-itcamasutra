import SearchInput from '../SearchInput/SearchInput';
import ProfileContainer from '../Profile/ProfileContainer';
import CommunicationContainer from '../Communication/CommunicationContainer';
import Feed from '../Feed/Feed';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';
import { Route } from 'react-router-dom';
import './Content.css';

const Content = () => {
  return (
    <main className="content">
      <div className="content__search">
        <SearchInput />
      </div>
      <div className="content__main">
        <Route exact strict path="/" render={() => <ProfileContainer />} />
        <Route
          path="/communication"
          render={() => <CommunicationContainer />}
        />
        <Route exact path="/feed" render={() => <Feed />} />
        <Route exact path="/music" render={() => <Music />} />
        <Route exact path="/settings" render={() => <Settings />} />
      </div>
    </main>
  );
};

export default Content;
