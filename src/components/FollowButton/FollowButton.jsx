const FollowButton = (props) => {
  const handleButtonClick = () => {
    if (props.followed) {
      props.onUnFollow(props.id);
    } else {
      props.onFollow(props.id);
    }
  };
  return (
    <div className="follow-button">
      <button
        className="follow-button__button"
        type="button"
        disabled={props.followingUsers.some((id) => id === props.id)}
        onClick={handleButtonClick}
      >
        {props.followed ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  );
};

export default FollowButton;
