import NavItem from '../NavItem/NavItem';
import './Nav.css';
import { ReactComponent as Profile } from './img/profile.svg';
import { ReactComponent as Message } from './img/message.svg';
import { ReactComponent as Users } from './img/users.svg';
import { ReactComponent as News } from './img/news.svg';
import { ReactComponent as Music } from './img/music.svg';
import { ReactComponent as Settings } from './img/settings.svg';

const Nav = (props) => {
  let classMod = '';
  if (props.type === 'home') {
    classMod = ' nav--home';
  }

  return (
    <nav className={`nav${classMod}`}>
      <ul className="nav__list">
        <NavItem
          name="Profile"
          href="/profile"
          icon={Profile}
          type={props.type}
        />
        <NavItem
          name="Message"
          href="/content/communication"
          icon={Message}
          type={props.type}
        />
        <NavItem
          name="Users"
          href="/content/users"
          icon={Users}
          type={props.type}
        />
        <NavItem
          name="News"
          href="/content/feed"
          icon={News}
          type={props.type}
        />
        <NavItem
          name="Music"
          href="/content/music"
          icon={Music}
          type={props.type}
        />
        <NavItem
          name="Settings"
          href="/content/settings"
          icon={Settings}
          type={props.type}
        />
      </ul>
    </nav>
  );
};

export default Nav;
