import './UsersSort.css';

const UsersSort = (props) => {
  return (
    <div className="users-sort">
      <button
        className="users-sort__button users-sort__button--active"
        type="button"
      >
        {`All member's `}
        <span className="users-sort__count">{props.usersCount}</span>
      </button>
      <button className="users-sort__button" type="button">
        {`My friends `}
        <span className="users-sort__count">{props.friendsCount}</span>
      </button>
    </div>
  );
};

export default UsersSort;
