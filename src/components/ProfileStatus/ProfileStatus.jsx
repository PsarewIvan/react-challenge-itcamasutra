import './ProfileStatus.css';

const ProfileStatus = (props) => {
  return (
    <div className="profile-status">
      {!props.isChanging && (
        <div className="profile-status__text" onClick={props.startChange}>
          {props.about}
        </div>
      )}
      {props.isChanging && (
        <input
          className="profile-status__input"
          type="text"
          value={props.about}
          autoFocus={true}
          onBlur={props.endChange}
        />
      )}
    </div>
  );
};

export default ProfileStatus;
