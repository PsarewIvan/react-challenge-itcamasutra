import './SearchInput.css';

const SearchInput = () => {
  return (
    <form
      className="search-input__wrapper"
      role="search"
      method="get"
      action="/mock-action"
    >
      <input
        className="search-input"
        type="text"
        name="search"
        required
        placeholder="Search..."
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchInput;
