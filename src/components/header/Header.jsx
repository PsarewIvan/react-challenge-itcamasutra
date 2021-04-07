import Logo from '../logo/Logo';
import Profile from '../profile/Profile';
import Nav from '../nav/Nav';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <div className="header__profile">
        <Profile />
      </div>
      <div className="header__nav">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
