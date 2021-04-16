import Avatar from '../Avatar/Avatar';
import ProfileItem from '../ProfileItem/ProfileItem';
import './UserCard.css';

const UserCard = (props) => {
  const profileItems = props.profileItems.map((item) => {
    return (
      <li className="user-card__connection-li" key={`user-card-${item.id}`}>
        <ProfileItem name={item.name} number={item.number} />
      </li>
    );
  });

  return (
    <div className="user-card">
      <div className="user-card__avatar">
        <Avatar users={props.users} currentUserId={props.currentUserId} />
      </div>
      <div className="user-card__connection">
        <ul className="user-card__connection-list">{profileItems}</ul>
      </div>
    </div>
  );
};

export default UserCard;
