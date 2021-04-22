import UserCard from './../UserCard/UserCard';
import FollowButton from './../FollowButton/FollowButton';

const User = (props) => {
  return (
    <div className="user">
      <div className="user__card">
        <UserCard
          userConnections={props.userConnections}
          userName={props.name}
          lastActive={props.lastActive}
          photos={props.photos}
          id={props.id}
        />
      </div>
      <div className="user__follow">
        <FollowButton
          followed={props.followed}
          id={props.id}
          onFollow={props.onFollow}
          onUnFollow={props.onUnFollow}
        />
      </div>
    </div>
  );
};

export default User;
