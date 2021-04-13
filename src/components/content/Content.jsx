import SearchInput from '../Search-input/Search-input';
import Profile from '../Profile/Profile';
import Communication from '../Communication/Communication';
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
        <Route exact strict path="/" component={Profile} />
        <Route exact path="/communication" component={Communication} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/music" component={Music} />
        <Route exact path="/settings" component={Settings} />
      </div>
    </main>
  );
};

export default Content;
