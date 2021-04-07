import Post from '../post/Post';
import './feed.css';

const Feed = () => {
  return (
    <div className="feed">
      <ul className="feed__list">
        <Post text="First post" />
        <Post text="Second post" />
        <Post text="Another post" />
      </ul>
    </div>
  );
};

export default Feed;
