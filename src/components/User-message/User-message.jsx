import './User-message.css';

const UserMassage = (props) => {
  return (
    <div className="user-massage">
      <p>{props.message}</p>
    </div>
  );
};

export default UserMassage;
