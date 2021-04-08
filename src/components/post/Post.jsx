import Avatar from '../avatar/Avatar';
import LikeButton from '../like-button/Like-button';
import './post.css';

const Post = (props) => {
  return (
    <li className="post">
      <div className="post__header">
        <Avatar type="post" />
      </div>
      <div className="post__inner">
        <p className="post__text">{props.text}</p>
      </div>
      <div className="post__action">
        <LikeButton />
      </div>
    </li>
  );
};

export default Post;
