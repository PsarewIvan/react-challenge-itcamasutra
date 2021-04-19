import Avatar from '../Avatar/Avatar';
import './UserMessage.css';

const UserMassage = (props) => {
  let classMod = '';
  if (props.currentUser) {
    classMod = 'user-message--self';
  }
  return (
    <div className={`user-message ${classMod}`}>
      <div className="user-message__avatar">
        <Avatar
          type="post"
          users={props.users}
          currentUserId={props.currentUserId}
          photos={props.photos}
        />
      </div>
      <div className="user-message__message-wrapper">
        <p className="user-message__message">{props.message}</p>
      </div>
    </div>
  );
};

export default UserMassage;
