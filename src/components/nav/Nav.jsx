import NavItem from '../Nav-item/Nav-item';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <NavItem name="Message" href="/dialogs" />
        <NavItem name="News" href="/feed" />
        <NavItem name="Music" href="/music" />
        <NavItem name="Settings" href="/settings" />
        <NavItem name="Profile" href="/" />
      </ul>
    </nav>
  );
};

export default Nav;
