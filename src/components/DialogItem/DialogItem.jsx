import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return <NavLink to={`/communication/${props.id}`}>{props.name}</NavLink>;
};

export default DialogItem;
