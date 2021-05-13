import './ProfileSocials.css';

const ProfileSocials = ({ contacts }) => {
  const socials = [];
  for (let contact in contacts) {
    socials.push(contact);
  }

  return (
    <div className="profile-socials">
      <h5 className="profile-socials__title">Socials</h5>
      <ul className="profile-socials__list">
        {socials.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </ul>
    </div>
  );
};

export default ProfileSocials;
