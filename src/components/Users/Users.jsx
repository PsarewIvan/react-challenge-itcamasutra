import User from './../User/User';
import UsersSort from './../UsersSort/UsersSort';
import * as axios from 'axios';
import './Users.css';

const Users = (props) => {
  if (props.users && props.users.length === 0) {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        props.setUsers(response.data.items);
      });

    // props.setUsers({
    //   usersCount: 15,
    //   friendsCount: 1,
    //   users: [
    //     {
    //       id: 2,
    //       name: 'Sam Sam',
    //       lastActive: 'Active 56 minutes ago',
    //       userConnections: [
    //         { id: 1, name: 'Friends', count: 4 },
    //         { id: 2, name: 'Groups', count: 1 },
    //       ],
    //       isFollowed: true,
    //     },
    //     {
    //       id: 3,
    //       name: 'Admin',
    //       lastActive: 'Active 5 months, 1 week ago',
    //       userConnections: [
    //         { id: 1, name: 'Friends', count: 10 },
    //         { id: 2, name: 'Groups', count: 2 },
    //       ],
    //       isFollowed: true,
    //     },
    //     {
    //       id: 4,
    //       name: 'Alexander Alexandrovich',
    //       lastActive: 'Active 5 months, 3 weeks ago',
    //       userConnections: [
    //         { id: 1, name: 'Friends', count: 17 },
    //         { id: 2, name: 'Groups', count: 3 },
    //       ],
    //       isFollowed: false,
    //     },
    //     {
    //       id: 5,
    //       name: 'Superman',
    //       lastActive: 'Active 5 months, 3 weeks ago',
    //       userConnections: [
    //         { id: 1, name: 'Friends', count: 1 },
    //         { id: 2, name: 'Groups', count: 8 },
    //       ],
    //       isFollowed: false,
    //     },
    //     {
    //       id: 6,
    //       name: 'Batman',
    //       lastActive: 'Active 5 months, 3 weeks ago',
    //       userConnections: [
    //         { id: 1, name: 'Friends', count: 14 },
    //         { id: 2, name: 'Groups', count: 31 },
    //       ],
    //       isFollowed: true,
    //     },
    //     {
    //       id: 7,
    //       name: 'Ken Lee',
    //       lastActive: 'Active 5 months, 3 weeks ago',
    //       userConnections: [
    //         { id: 1, name: 'Friends', count: 12 },
    //         { id: 2, name: 'Groups', count: 23 },
    //       ],
    //       isFollowed: false,
    //     },
    //     {
    //       id: 8,
    //       name: 'Lori Chase',
    //       lastActive: 'Active 5 months, 3 weeks ago',
    //       userConnections: [
    //         { id: 1, name: 'Friends', count: 6 },
    //         { id: 2, name: 'Groups', count: 41 },
    //       ],
    //       isFollowed: false,
    //     },
    //   ],
    // });
  }

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
                photos={user.photos}
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
