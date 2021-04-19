import './UsersPaginationButton.css';

const UsersPagination = (props) => {
  const handleButtonClick = () => {
    props.changePage(props.number);
  };

  return (
    <button
      className={`users-pagination-button ${
        props.currentPage === props.number &&
        'users-pagination-button--selected'
      }`}
      onClick={handleButtonClick}
    >
      {props.number}
    </button>
  );
};

export default UsersPagination;
