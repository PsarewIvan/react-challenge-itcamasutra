import Avatar from '../Avatar/Avatar';
import LikeButton from '../LikeButton/LikeButton';
import './Post.css';

const Post = (props) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar type="post" userName={props.userName} photos={props.photos} />
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
