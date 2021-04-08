import './nav-item.css';

const NavItem = (props) => {
  return (
    <li className="nav-item">
      <a className="nav-item__link" href={props.href}>
        {props.name}
      </a>
    </li>
  );
};

export default NavItem;
