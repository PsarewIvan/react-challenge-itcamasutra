import './UserConnection.css';

const UserConnection = (props) => {
  return (
    <div className="user-connection">
      <span className="user-connection__count">{props.number}</span>
      <span className="user-connection__name">{props.name}</span>
    </div>
  );
};

export default UserConnection;
