import './UsersPagination.css';

const UsersPagination = (props) => {
  const handleButtonClick = () => {
    props.changePage(props.number);
  };

  return (
    <button
      className={`user-pagination ${
        props.currentPage === props.number && 'user-pagination--selected'
      }`}
      onClick={handleButtonClick}
    >
      {props.number}
    </button>
  );
};

export default UsersPagination;
