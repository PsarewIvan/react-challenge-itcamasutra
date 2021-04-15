import Avatar from '../Avatar/Avatar';
import LikeButton from '../Like-button/Like-button';
import './Post.css';

const Post = (props) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          type="post"
          users={props.users}
          currentUserId={props.currentUserId}
        />
      </div>
      <div className="post__inner">
        <p className="post__text">{props.message}</p>
      </div>
      <div className="post__action">
        <LikeButton likeCount={props.likeCount} />
      </div>
    </div>
  );
};

export default Post;
