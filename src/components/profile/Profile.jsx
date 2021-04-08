import MessageInput from '../message-input/Message-input';
import Post from '../post/Post';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__card">Profile Card</div>
      <div className="profile__message">
        <MessageInput />
      </div>
      <ul className="profile__list">
        <Post text="First post" />
        <Post text="Second post" />
        <Post text="Another post" />
      </ul>
    </div>
  );
};

export default Profile;
