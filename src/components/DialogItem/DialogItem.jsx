import { NavLink } from 'react-router-dom';

const DialogItem = ({ id, name }) => {
  return <NavLink to={`/communication/${id}`}>{name}</NavLink>;
};

export default DialogItem;
