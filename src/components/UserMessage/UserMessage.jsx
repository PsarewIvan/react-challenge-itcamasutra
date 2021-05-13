import Avatar from '../Avatar/Avatar';
import './UserMessage.css';

const UserMassage = ({
  currentUser,
  users,
  currentUserId,
  photos,
  message,
}) => {
  let classMod = '';
  if (currentUser) {
    classMod = 'user-message--self';
  }
  return (
    <div className={`user-message ${classMod}`}>
      <div className="user-message__avatar">
        <Avatar
          type="post"
          users={users}
          currentUserId={currentUserId}
          photos={photos}
        />
      </div>
      <div className="user-message__message-wrapper">
        <p className="user-message__message">{message}</p>
      </div>
    </div>
  );
};

export default UserMassage;
