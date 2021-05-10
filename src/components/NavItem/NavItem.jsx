import { NavLink } from 'react-router-dom';
import './NavItem.scss';

const NavItem = (props) => {
  const Icon = props.icon;
  let classMod = '';
  if (props.type === 'home') {
    classMod = ' nav-item--home';
  }

  return (
    <li className={`nav-item nav-item${classMod}`}>
      {props.logout ? (
        <button className="nav-item__link" onClick={props.logout}>
          <Icon className="nav-item__icon" aria-hidden="true" />
          {props.name}
        </button>
      ) : (
        <NavLink
          className="nav-item__link"
          activeClassName="nav-item__link--active"
          to={props.href}
        >
          <Icon className="nav-item__icon" aria-hidden="true" />
          {props.name}
        </NavLink>
      )}
    </li>
  );
};

export default NavItem;
