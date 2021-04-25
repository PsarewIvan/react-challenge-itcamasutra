import Logo from '../Logo/Logo';
import UserCard from '../UserCard/UserCard';
import NavContainer from '../Nav/NavContainer';
import './Header.css';

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <div className="header__profile-wrapper">
        <div className="header__profile">
          <UserCard
            userName={props.userName}
            userStatus={props.userStatus}
            userConnections={props.userConnections}
            photos={props.photos}
          />
        </div>
      </div>
      <div className="header__nav">
        <NavContainer />
      </div>
    </header>
  );
};

export default Header;
