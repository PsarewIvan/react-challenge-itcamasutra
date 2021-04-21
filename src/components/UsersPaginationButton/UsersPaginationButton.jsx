import './UsersPaginationButton.css';

const UsersPagination = (props) => {
  const handleButtonClick = () => {
    props.onChangePage(props.number);
  };
  const isThisCurrentPageButton = props.currentPage === props.number;

  return (
    <button
      className={`users-pagination-button ${
        props.currentPage === props.number &&
        'users-pagination-button--selected'
      }`}
      disabled={isThisCurrentPageButton ? true : false}
      onClick={handleButtonClick}
    >
      {props.number}
    </button>
  );
};

export default UsersPagination;
