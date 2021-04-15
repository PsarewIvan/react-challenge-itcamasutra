import SearchInput from '../Search-input/Search-input';
import Profile from '../Profile/Profile';
import Communication from '../Communication/Communication';
import Feed from '../Feed/Feed';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';
import { Route } from 'react-router-dom';
import './Content.css';

const Content = (props) => {
  return (
    <main className="content">
      <div className="content__search">
        <SearchInput />
      </div>
      <div className="content__main">
        <Route
          exact
          strict
          path="/"
          render={() => (
            <Profile
              posts={props.posts}
              users={props.users}
              currentUserId={props.currentUserId}
            />
          )}
        />
        <Route
          path="/communication"
          render={() => (
            <Communication
              messages={props.messages}
              dialogs={props.dialogs}
              currentUserId={props.currentUserId}
              users={props.users}
              addMessage={props.addMessage}
              changeNewMessage={props.changeNewMessage}
              userMessageText={props.userMessageText}
              messagePlaceholder={props.messagePlaceholder}
            />
          )}
        />
        <Route exact path="/feed" render={() => <Feed />} />
        <Route exact path="/music" render={() => <Music />} />
        <Route exact path="/settings" render={() => <Settings />} />
      </div>
    </main>
  );
};

export default Content;
