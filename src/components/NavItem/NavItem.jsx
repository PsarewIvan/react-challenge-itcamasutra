import { NavLink } from 'react-router-dom';
import './NavItem.scss';

const NavItem = ({ icon, type, logout, name, href }) => {
  const Icon = icon;
  let classMod = '';
  if (type === 'home') {
    classMod = ' nav-item--home';
  }

  return (
    <li className={`nav-item nav-item${classMod}`}>
      {logout ? (
        <button className="nav-item__link" onClick={logout}>
          <Icon className="nav-item__icon" aria-hidden="true" />
          {name}
        </button>
      ) : (
        <NavLink
          className="nav-item__link"
          activeClassName="nav-item__link--active"
          to={href}
        >
          <Icon className="nav-item__icon" aria-hidden="true" />
          {name}
        </NavLink>
      )}
    </li>
  );
};

export default NavItem;
