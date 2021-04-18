const FollowButton = (props) => {
  const handleButtonClick = () => {
    if (props.isFollowed) {
      props.unFollow(props.id);
    } else {
      props.follow(props.id);
    }
  };
  return (
    <div className="follow-button">
      <button
        className="follow-button__button"
        type="button"
        onClick={handleButtonClick}
      >
        {props.isFollowed ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  );
};

export default FollowButton;
