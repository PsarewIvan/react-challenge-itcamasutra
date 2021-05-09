import Post from '../Post/Post';
import './Posts.css';

const Posts = (props) => {
  console.log(props.posts);
  const postElement = props.posts
    .map((post) => {
      return (
        <li className="posts__element" key={`posts-${post.id}`}>
          <Post
            message={post.message}
            likeCount={post.likeCount}
            userName={props.userName}
            photos={props.photos}
          />
        </li>
      );
    })
    .reverse();

  return <ul className="posts">{postElement}</ul>;
};

export default Posts;
