const ProfileJob = ({ lookingForAJob, lookingForAJobDescription }) => {
  return (
    <div className="profile-job">
      <p>{lookingForAJob ? 'В поисках работы' : 'Уже работаю'}</p>
      <p>{lookingForAJobDescription}</p>
    </div>
  );
};

export default ProfileJob;
