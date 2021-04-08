import SearchInput from '../search-input/Search-input';
import Profile from '../Profile/Profile';
import Dialogs from '../Dialogs/Dialogs';
import Feed from '../Feed/Feed';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';
import { Route } from 'react-router-dom';
import './content.css';

const Content = () => {
  return (
    <main className="content">
      <div className="content__search">
        <SearchInput />
      </div>
      <div className="content__main">
        <Route exact path="/" component={Profile} />
        <Route exact path="/dialogs" component={Dialogs} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/music" component={Music} />
        <Route exact path="/settings" component={Settings} />
      </div>
    </main>
  );
};

export default Content;
