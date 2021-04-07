import Avatar from '../avatar/Avatar';
import ProfileItem from '../profile-item/Profile-item';
import './profile.css';

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__avatar">
        <Avatar />
      </div>
      <div className="profile__connection">
        <ul className="profile__connection-list">
          <li className="profile__connection-li">
            <ProfileItem name="Friends" number="1" />
          </li>
          <li className="profile__connection-li">
            <ProfileItem name="Groups" number="5" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
