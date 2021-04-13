import NavItem from '../Nav-item/Nav-item';
import './Nav.css';
import { ReactComponent as Profile } from './img/profile.svg';
import { ReactComponent as Message } from './img/message.svg';
import { ReactComponent as News } from './img/news.svg';
import { ReactComponent as Music } from './img/music.svg';
import { ReactComponent as Settings } from './img/settings.svg';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <NavItem name="Profile" href="/" icon={Profile} />
        <NavItem name="Message" href="/communication" icon={Message} />
        <NavItem name="News" href="/feed" icon={News} />
        <NavItem name="Music" href="/music" icon={Music} />
        <NavItem name="Settings" href="/settings" icon={Settings} />
      </ul>
    </nav>
  );
};

export default Nav;
