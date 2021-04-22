import * as axios from 'axios';

const FollowButton = (props) => {
  const handleButtonClick = () => {
    if (props.followed) {
      axios
        .delete(
          `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
          {
            withCredentials: true,
            headers: {
              'API-KEY': 'cf50e140-3ca8-491e-83e9-6e5e48b9e22e',
            },
          }
        )
        .then((response) => {
          if (response.data.resultCode === 0) {
            props.onUnFollow(props.id);
          }
        });
    } else {
      axios
        .post(
          `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
          {},
          {
            withCredentials: true,
            headers: {
              'API-KEY': 'cf50e140-3ca8-491e-83e9-6e5e48b9e22e',
            },
          }
        )
        .then((response) => {
          if (response.data.resultCode === 0) {
            props.onFollow(props.id);
          }
        });
    }
  };
  return (
    <div className="follow-button">
      <button
        className="follow-button__button"
        type="button"
        onClick={handleButtonClick}
      >
        {props.followed ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  );
};

export default FollowButton;
