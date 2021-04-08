import NavItem from '../nav-item/Nav-item';
import './nav.css';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <NavItem name="Profile" href="/profile" />
        <NavItem name="Message" href="message" />
        <NavItem name="News" href="news" />
        <NavItem name="Music" href="music" />
        <NavItem name="Settings" href="settings" />
      </ul>
    </nav>
  );
};

export default Nav;
