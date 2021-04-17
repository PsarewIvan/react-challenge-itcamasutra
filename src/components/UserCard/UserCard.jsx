import Avatar from '../Avatar/Avatar';
import ProfileItem from '../ProfileItem/ProfileItem';
import './UserCard.css';

const UserCard = (props) => {
  const profileItems = props.userConnections.map((item) => {
    return (
      <li className="user-card__connection-li" key={`user-card-${item.id}`}>
        <ProfileItem name={item.name} number={item.count} />
      </li>
    );
  });

  return (
    <div className="user-card">
      <div className="user-card__avatar">
        <Avatar userName={props.userName} userStatus={props.userStatus} />
      </div>
      <div className="user-card__connection">
        <ul className="user-card__connection-list">{profileItems}</ul>
      </div>
    </div>
  );
};

export default UserCard;
