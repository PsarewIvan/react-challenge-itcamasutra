import React from 'react';
import User from './../User/User';
import UsersSort from './../UsersSort/UsersSort';
import UsersPagination from './../UsersPagination/UsersPagination';
import * as axios from 'axios';
import './Users.css';

class Users extends React.Component {
  componentDidMount() {
    this.serverRequest(this.props.currentPage);
  }

  serverRequest(pageNumber) {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setNumberOfPages(response.data.totalCount);
        this.props.setUsers(response.data.items);
      });
  }

  changeUserPage = (pageNumber) => {
    this.props.changeCurrentPage(pageNumber);
    this.serverRequest(pageNumber);
  };

  buttonsRender() {
    const pageCount = Math.ceil(this.props.totalCount / this.props.pageSize);
    const buttons = [];
    for (let i = 1; i <= pageCount; i++) {
      buttons.push(i);
    }
    return buttons.map((i) => (
      <UsersPagination
        number={i}
        currentPage={this.props.currentPage}
        changePage={this.changeUserPage}
        key={i}
      />
    ));
  }

  render() {
    return (
      <div className="users">
        <div className="users__sort">
          <UsersSort
            friendsCount={'this.props.friendsCount'}
            usersCount={this.props.totalCount}
          />
        </div>
        <div className="users__pagination">{this.buttonsRender()}</div>
        <ul className="users__list">
          {this.props.users.map((user) => {
            return (
              <li className="users__user" key={user.id}>
                <User
                  userConnections={user.userConnections}
                  name={user.name}
                  lastActive={user.lastActive}
                  isFollowed={user.isFollowed}
                  photos={user.photos}
                  id={user.id}
                  follow={this.props.follow}
                  unFollow={this.props.unFollow}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

// const UsersE = (props) => {
//   const getUsers = () => {
//     if (props.users && props.users.length === 0) {
//       axios
//         .get('https://social-network.samuraijs.com/api/1.0/users')
//         .then((response) => {
//           props.setUsers(response.data.items);
//         });
//     }
//   };

//   return (
//     <div className="users">
//       <button type="button" onClick={getUsers}>
//         Get users
//       </button>
//       <div className="users__sort">
//         <UsersSort
//           friendsCount={props.friendsCount}
//           usersCount={props.usersCount}
//         />
//       </div>
//       <ul className="users__list">
//         {props.users.map((user) => {
//           return (
//             <li className="users__user" key={user.id}>
//               <User
//                 userConnections={user.userConnections}
//                 name={user.name}
//                 lastActive={user.lastActive}
//                 isFollowed={user.isFollowed}
//                 photos={user.photos}
//                 id={user.id}
//                 follow={props.follow}
//                 unFollow={props.unFollow}
//               />
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

export default Users;
