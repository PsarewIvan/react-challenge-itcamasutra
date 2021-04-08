import SearchInput from '../search-input/Search-input';
import MessageInput from '../message-input/Message-input';
import Profile from '../Profile/Profile';
import './content.css';

const Content = () => {
  return (
    <main className="content">
      <div className="content__search">
        <SearchInput />
      </div>
      <div className="content__message">
        <MessageInput />
      </div>
      <div className="content__feed">
        <Profile />
      </div>
    </main>
  );
};

export default Content;
