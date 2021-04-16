import { NavLink } from 'react-router-dom';
import './NavItem.css';

const NavItem = (props) => {
  const Icon = props.icon;

  return (
    <li className="nav-item">
      <NavLink
        className="nav-item__link"
        activeClassName="nav-item__link--active"
        to={props.href}
      >
        <Icon className="nav-item__icon" aria-hidden="true" />
        {props.name}
      </NavLink>
    </li>
  );
};

export default NavItem;
