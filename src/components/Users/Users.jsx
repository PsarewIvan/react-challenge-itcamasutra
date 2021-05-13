import React from 'react';
import User from './../User/User';
import UsersSort from './../UsersSort/UsersSort';
import UsersPaginationButton from './../UsersPaginationButton/UsersPaginationButton';
import Loader from './../Loader/Loader';
import './Users.css';

const Users = ({
  totalCount,
  pageSize,
  currentPage,
  onChangePage,
  followed,
  onUnFollow,
  onFollow,
  isFetching,
  users,
  followingUsers,
}) => {
  const paginationRender = () => {
    const pageCount = Math.ceil(totalCount / pageSize);
    const buttons = [];
    for (let i = 1; i <= pageCount; i++) {
      if (
        i === 1 ||
        i === currentPage - 1 ||
        i === currentPage ||
        i === currentPage + 1 ||
        i === pageCount
      ) {
        buttons.push(i);
      }
    }
    return buttons.map((i) => (
      <UsersPaginationButton
        number={i}
        currentPage={currentPage}
        onChangePage={onChangePage}
        key={i}
      />
    ));
  };

  return (
    <div className="users">
      <div className="users__sort">
        <UsersSort friendsCount={'this.friendsCount'} usersCount={totalCount} />
      </div>
      <div className="users__pagination">{paginationRender()}</div>
      <div>{isFetching ? <Loader /> : null}</div>
      <ul className="users__list">
        {users.map((user) => (
          <li className="users__user" key={user.id}>
            <User
              userConnections={user.userConnections}
              name={user.name}
              lastActive={user.lastActive}
              followed={user.followed}
              photos={user.photos}
              id={user.id}
              followingUsers={followingUsers}
              onFollow={onFollow}
              onUnFollow={onUnFollow}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
