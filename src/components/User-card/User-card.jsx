import Avatar from '../Avatar/Avatar';
import ProfileItem from '../Profile-item/Profile-item';
import './User-card.css';

const UserCard = () => {
  return (
    <div className="user-card">
      <div className="user-card__avatar">
        <Avatar />
      </div>
      <div className="user-card__connection">
        <ul className="user-card__connection-list">
          <li className="user-card__connection-li">
            <ProfileItem name="Friends" number="1" />
          </li>
          <li className="user-card__connection-li">
            <ProfileItem name="Groups" number="5" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
