import { NavLink } from 'react-router-dom';
import './nav-item.css';

const NavItem = (props) => {
  return (
    <li className="nav-item">
      <NavLink className="nav-item__link" to={props.href}>
        {props.name}
      </NavLink>
    </li>
  );
};

export default NavItem;
