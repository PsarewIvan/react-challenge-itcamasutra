import Avatar from '../Avatar/Avatar';
import UserConnection from '../UserConnection/UserConnection';
import './UserCard.css';

const UserCard = (props) => {
  const userConnections = [
    { id: 1, name: 'Friends', count: 4 },
    { id: 2, name: 'Groups', count: 1 },
  ];

  const profileItems = userConnections.map((item) => {
    return (
      <li className="user-card__connection-li" key={`user-card-${item.id}`}>
        <UserConnection name={item.name} number={item.count} />
      </li>
    );
  });

  return (
    <div className="user-card">
      <div className="user-card__avatar">
        <Avatar
          userName={props.userName}
          userStatus={props.userStatus}
          lastActive={props.lastActive}
          id={props.id}
          photos={props.photos}
        />
      </div>
      <div className="user-card__connection">
        <ul className="user-card__connection-list">{profileItems}</ul>
      </div>
    </div>
  );
};

export default UserCard;
