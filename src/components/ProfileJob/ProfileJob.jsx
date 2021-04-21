const ProfileJob = (props) => {
  return (
    <div className="profile-job">
      <p>{props.lookingForAJob ? 'В поисках работы' : 'Уже работаю'}</p>
      <p>{props.lookingForAJobDescription}</p>
    </div>
  );
};

export default ProfileJob;
