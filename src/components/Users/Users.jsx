import React from 'react';
import User from './../User/User';
import UsersSort from './../UsersSort/UsersSort';
import UsersPaginationButton from './../UsersPaginationButton/UsersPaginationButton';
import Loader from './../Loader/Loader';
import './Users.css';

const Users = (props) => {
  const buttonsRender = () => {
    const pageCount = Math.ceil(props.totalCount / props.pageSize);
    const buttons = [];
    for (let i = 1; i <= pageCount; i++) {
      if (
        i === 1 ||
        i === props.currentPage - 1 ||
        i === props.currentPage ||
        i === props.currentPage + 1 ||
        i === pageCount
      ) {
        buttons.push(i);
      }
    }
    return buttons.map((i) => (
      <UsersPaginationButton
        number={i}
        currentPage={props.currentPage}
        onChangePage={props.onChangePage}
        key={i}
      />
    ));
  };

  const loaderRender = () => {
    if (props.isFetching) {
      return <Loader />;
    }
  };

  return (
    <div className="users">
      <div className="users__sort">
        <UsersSort
          friendsCount={'this.props.friendsCount'}
          usersCount={props.totalCount}
        />
      </div>
      <div className="users__pagination">{buttonsRender()}</div>
      <div>{loaderRender()}</div>
      <ul className="users__list">
        {props.users.map((user) => (
          <li className="users__user" key={user.id}>
            <User
              userConnections={user.userConnections}
              name={user.name}
              lastActive={user.lastActive}
              isFollowed={user.isFollowed}
              photos={user.photos}
              id={user.id}
              onFollow={props.onFollow}
              onUnFollow={props.onUnFollow}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
