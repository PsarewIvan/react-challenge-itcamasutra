import Post from '../Post/Post';
import './Posts.css';

const Posts = (props) => {
  const postElement = props.posts.map((post) => {
    return (
      <li className="posts__element" key={`posts-${post.id}`}>
        <Post
          message={post.message}
          likeCount={post.likeCount}
          users={props.users}
          currentUserId={props.currentUserId}
        />
      </li>
    );
  });

  return (
    <ul className="posts">
      {postElement}
    </ul>
  );
};

export default Posts;
