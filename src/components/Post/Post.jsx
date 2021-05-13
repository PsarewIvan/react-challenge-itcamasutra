import Avatar from '../Avatar/Avatar';
import LikeButton from '../LikeButton/LikeButton';
import './Post.css';

const Post = ({ userName, photos, message, likeCount }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar type="post" userName={userName} photos={photos} />
      </div>
      <div className="post__inner">
        <p className="post__text">{message}</p>
      </div>
      <div className="post__action">
        <LikeButton likeCount={likeCount} />
      </div>
    </div>
  );
};

export default Post;
