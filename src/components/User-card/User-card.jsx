import Avatar from '../Avatar/Avatar';
import ProfileItem from '../Profile-item/Profile-item';
import './User-card.css';

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
        <Avatar />
      </div>
      <div className="user-card__connection">
        <ul className="user-card__connection-list">{profileItems}</ul>
      </div>
    </div>
  );
};

export default UserCard;
