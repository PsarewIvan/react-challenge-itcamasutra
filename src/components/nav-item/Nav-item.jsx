import './nav-item.css';

const NavItem = (props) => {
  return (
    <li className="nav-item">
      <a className="nav-item__link" href="/mock-link">
        {props.name}
      </a>
    </li>
  );
};

export default NavItem;
