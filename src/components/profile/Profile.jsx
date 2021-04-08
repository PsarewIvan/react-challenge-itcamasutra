import Post from '../post/Post';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__card">Profile Card</div>
      <ul className="profile__list">
        <Post text="First post" />
        <Post text="Second post" />
        <Post text="Another post" />
      </ul>
    </div>
  );
};

export default Profile;
