const FollowButton = ({
  followed,
  onUnFollow,
  onFollow,
  id,
  followingUsers,
}) => {
  const handleButtonClick = () => {
    if (followed) {
      onUnFollow(id);
    } else {
      onFollow(id);
    }
  };
  return (
    <div className="follow-button">
      <button
        className="follow-button__button"
        type="button"
        disabled={followingUsers.some((currentId) => currentId === id)}
        onClick={handleButtonClick}
      >
        {followed ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  );
};

export default FollowButton;
