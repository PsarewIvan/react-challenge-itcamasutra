import { NavLink } from 'react-router-dom';
import './Nav-item.css';

const NavItem = (props) => {
  return (
    <li className="nav-item">
      <NavLink
        className="nav-item__link"
        activeClassName="nav-link__active"
        to={props.href}
      >
        {props.name}
      </NavLink>
    </li>
  );
};

export default NavItem;
