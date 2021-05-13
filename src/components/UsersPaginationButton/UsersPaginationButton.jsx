import './UsersPaginationButton.css';

const UsersPagination = ({ onChangePage, number, currentPage }) => {
  const handleButtonClick = () => {
    onChangePage(number);
  };
  const isThisCurrentPageButton = currentPage === number;

  return (
    <button
      className={`users-pagination-button ${
        currentPage === number && 'users-pagination-button--selected'
      }`}
      disabled={isThisCurrentPageButton ? true : false}
      onClick={handleButtonClick}
    >
      {number}
    </button>
  );
};

export default UsersPagination;
