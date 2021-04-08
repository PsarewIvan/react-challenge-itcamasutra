import SearchInput from '../search-input/Search-input';
import Profile from '../Profile/Profile';
import Dialogs from '../Dialogs/Dialogs';
import Feed from '../Feed/Feed';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';
import './content.css';

const Content = () => {
  return (
    <main className="content">
      <div className="content__search">
        <SearchInput />
      </div>
      <div className="content__main">
        <Profile />
        <Dialogs />
        <Feed />
        <Music />
        <Settings />
      </div>
    </main>
  );
};

export default Content;
