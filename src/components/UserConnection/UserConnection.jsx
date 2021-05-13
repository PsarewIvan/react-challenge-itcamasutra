import './UserConnection.css';

const UserConnection = ({ number, name }) => {
  return (
    <div className="user-connection">
      <span className="user-connection__count">{number}</span>
      <span className="user-connection__name">{name}</span>
    </div>
  );
};

export default UserConnection;
