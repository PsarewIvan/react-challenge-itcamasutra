import Avatar from '../avatar/Avatar';
import './post.css';

const Post = (props) => {
  return (
    <li className="post">
      <div className="post__avatar">
        <Avatar type="post" />
      </div>
      <p className="post__text">{props.text}</p>
    </li>
  );
};

export default Post;
