import UserCard from './../UserCard/UserCard';
import FollowButton from './../FollowButton/FollowButton';

const User = ({
  userConnections,
  name,
  lastActive,
  photos,
  id,
  followed,
  followingUsers,
  onFollow,
  onUnFollow,
}) => {
  return (
    <div className="user">
      <div className="user__card">
        <UserCard
          userConnections={userConnections}
          userName={name}
          lastActive={lastActive}
          photos={photos}
          id={id}
        />
      </div>
      <div className="user__follow">
        <FollowButton
          followed={followed}
          id={id}
          followingUsers={followingUsers}
          onFollow={onFollow}
          onUnFollow={onUnFollow}
        />
      </div>
    </div>
  );
};

export default User;
