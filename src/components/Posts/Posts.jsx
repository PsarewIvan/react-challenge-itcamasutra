import Post from '../Post/Post';
import './Posts.css';

const Posts = ({ posts, userName, photos }) => {
  const postElement = posts
    .map((post) => {
      return (
        <li className="posts__element" key={`posts-${post.id}`}>
          <Post
            message={post.message}
            likeCount={post.likeCount}
            userName={userName}
            photos={photos}
          />
        </li>
      );
    })
    .reverse();

  return <ul className="posts">{postElement}</ul>;
};

export default Posts;
