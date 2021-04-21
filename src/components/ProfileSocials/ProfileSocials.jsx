import './ProfileSocials.css';

const ProfileSocials = (props) => {
  const socials = [];
  for (let contact in props.contacts) {
    socials.push(contact);
  }

  return (
    <div className="profile-socials">
      <h5 className="profile-socials__title">Socials</h5>
      <ul className="profile-socials__list">
        {socials.map((item) => (
          <p>{item}</p>
        ))}
      </ul>
    </div>
  );
};

export default ProfileSocials;
