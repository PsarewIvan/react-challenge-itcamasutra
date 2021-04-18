import User from './../User/User';
import UsersSort from './../UsersSort/UsersSort';

const Users = (props) => {
  return (
    <div className="users">
      <div className="users__sort">
        <UsersSort
          friendsCount={props.friendsCount}
          usersCount={props.usersCount}
        />
      </div>
      <ul className="users__list">
        {props.users.map((user) => {
          return (
            <li className="users__user" key={user.id}>
              <User
                userConnections={user.userConnections}
                name={user.name}
                lastActive={user.lastActive}
                isFollowed={user.isFollowed}
                id={user.id}
                follow={props.follow}
                unFollow={props.unFollow}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
