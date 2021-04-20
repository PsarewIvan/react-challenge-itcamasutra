import NavItem from '../NavItem/NavItem';
import './Nav.css';
import { ReactComponent as Profile } from './img/profile.svg';
import { ReactComponent as Message } from './img/message.svg';
import { ReactComponent as Users } from './img/users.svg';
import { ReactComponent as News } from './img/news.svg';
import { ReactComponent as Music } from './img/music.svg';
import { ReactComponent as Settings } from './img/settings.svg';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <NavItem name="Profile" href="/profile" icon={Profile} />
        <NavItem name="Message" href="/content/communication" icon={Message} />
        <NavItem name="Users" href="/content/users" icon={Users} />
        <NavItem name="News" href="/content/feed" icon={News} />
        <NavItem name="Music" href="/content/music" icon={Music} />
        <NavItem name="Settings" href="/content/settings" icon={Settings} />
      </ul>
    </nav>
  );
};

export default Nav;
