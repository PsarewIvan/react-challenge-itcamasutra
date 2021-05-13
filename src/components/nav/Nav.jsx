import NavItem from '../NavItem/NavItem';
import './Nav.css';
import { ReactComponent as ProfileIcon } from './img/profile.svg';
import { ReactComponent as MessageIcon } from './img/message.svg';
import { ReactComponent as UsersIcon } from './img/users.svg';
import { ReactComponent as NewsIcon } from './img/news.svg';
import { ReactComponent as MusicIcon } from './img/music.svg';
import { ReactComponent as SettingsIcon } from './img/settings.svg';

const Nav = ({ type, userId, isAuthorized, logout }) => {
  let classMod = '';
  if (type === 'home') {
    classMod = ' nav--home';
  }

  return (
    <nav className={`nav${classMod}`}>
      <ul className="nav__list">
        <NavItem
          name="Profile"
          href={`/profile/${userId}`}
          icon={ProfileIcon}
          type={type}
        />
        <NavItem
          name="Message"
          href="/content/communication"
          icon={MessageIcon}
          type={type}
        />
        <NavItem
          name="Users"
          href="/content/users"
          icon={UsersIcon}
          type={type}
        />
        <NavItem name="News" href="/content/feed" icon={NewsIcon} type={type} />
        <NavItem
          name="Music"
          href="/content/music"
          icon={MusicIcon}
          type={type}
        />
        {isAuthorized && (
          <NavItem
            name="Logout"
            href="/content/settings"
            icon={SettingsIcon}
            type={type}
            logout={logout}
          />
        )}
      </ul>
    </nav>
  );
};

export default Nav;
