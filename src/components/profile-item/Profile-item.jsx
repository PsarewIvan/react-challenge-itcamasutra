import './Profile-item.css';

const ProfileItem = (props) => {
  return (
    <div className="profile-item">
      <span className="profile-item__count">{props.number}</span>
      <span className="profile-item__name">{props.name}</span>
    </div>
  );
};

export default ProfileItem;
