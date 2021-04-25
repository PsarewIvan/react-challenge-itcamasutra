import NavItem from '../NavItem/NavItem';
import './Nav.css';
import { ReactComponent as ProfileIcon } from './img/profile.svg';
import { ReactComponent as MessageIcon } from './img/message.svg';
import { ReactComponent as UsersIcon } from './img/users.svg';
import { ReactComponent as NewsIcon } from './img/news.svg';
import { ReactComponent as MusicIcon } from './img/music.svg';
import { ReactComponent as SettingsIcon } from './img/settings.svg';

const Nav = (props) => {
  let classMod = '';
  if (props.type === 'home') {
    classMod = ' nav--home';
  }

  return (
    <nav className={`nav${classMod}`}>
      <ul className="nav__list">
        {props.isAuthorized ? (
          <>
            <NavItem
              name="Profile"
              href={`/profile/${props.userId}`}
              icon={ProfileIcon}
              type={props.type}
            />
            <NavItem
              name="Message"
              href="/content/communication"
              icon={MessageIcon}
              type={props.type}
            />
          </>
        ) : null}
        <NavItem
          name="Users"
          href="/content/users"
          icon={UsersIcon}
          type={props.type}
        />
        <NavItem
          name="News"
          href="/content/feed"
          icon={NewsIcon}
          type={props.type}
        />
        <NavItem
          name="Music"
          href="/content/music"
          icon={MusicIcon}
          type={props.type}
        />
        <NavItem
          name="Settings"
          href="/content/settings"
          icon={SettingsIcon}
          type={props.type}
        />
      </ul>
    </nav>
  );
};

export default Nav;
