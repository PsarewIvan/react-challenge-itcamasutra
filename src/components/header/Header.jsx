import Logo from '../Logo/Logo';
import UserCard from '../UserCard/UserCard';
import Nav from '../Nav/Nav';
import './Header.css';

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <div className="header__profile">
        <UserCard
          profileItems={props.profileItems}
          users={props.users}
          currentUserId={props.currentUserId}
        />
      </div>
      <div className="header__nav">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
