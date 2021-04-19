import './UsersSort.css';

const UsersSort = () => {
  return (
    <div className="users-sort">
      <button
        className="users-sort__button users-sort__button--active"
        type="button"
      >
        {`All member's `}
        <span className="users-sort__count">
          {/* {props.usersCount} */}
          125
        </span>
      </button>
      <button className="users-sort__button" type="button">
        {`My friends `}
        <span className="users-sort__count">
          {/* {props.friendsCount} */}
          15
        </span>
      </button>
    </div>
  );
};

export default UsersSort;
