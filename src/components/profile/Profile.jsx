import MessageInput from '../Message-input/Message-input';
import Post from '../Post/Post';
import './Profile.css';

const Profile = (props) => {
  const postElement = props.posts.map((post) => {
    return (
      <li className="profile__li" key={`posts-${post.id}`}>
        <Post message={post.message} likeCount={post.likeCount} />
      </li>
    );
  });

  return (
    <div className="profile">
      <div className="profile__card">Profile Card</div>
      <div className="profile__message">
        <MessageInput />
      </div>
      <ul className="profile__list">{postElement}</ul>
    </div>
  );
};

export default Profile;
