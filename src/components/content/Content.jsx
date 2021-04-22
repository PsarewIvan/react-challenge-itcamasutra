import HeaderContainer from './../Header/HeaderContainer';
import CommunicationContainer from '../Communication/CommunicationContainer';
import UsersContainer from '../Users/UsersContainer';
import Feed from '../Feed/Feed';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';
import { Route } from 'react-router-dom';
import './Content.css';

const Content = () => {
  return (
    <div className="content">
      <div className="content__header">
        <HeaderContainer />
      </div>
      <div className="content__main">
        <Route
          path="/content/communication"
          render={() => <CommunicationContainer />}
        />
        <Route path="/content/users" render={() => <UsersContainer />} />
        <Route exact path="/content/feed" render={() => <Feed />} />
        <Route exact path="/content/music" render={() => <Music />} />
        <Route exact path="/content/settings" render={() => <Settings />} />
      </div>
    </div>
  );
};

export default Content;
