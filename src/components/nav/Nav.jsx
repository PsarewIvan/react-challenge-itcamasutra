import NavItem from '../nav-item/Nav-item';
import './nav.css';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <NavItem name="Profile" />
        <NavItem name="Message" />
        <NavItem name="News" />
        <NavItem name="Music" />
        <NavItem name="Settings" />
      </ul>
    </nav>
  );
};

export default Nav;
