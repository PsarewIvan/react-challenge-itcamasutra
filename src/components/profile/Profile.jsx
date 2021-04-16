import PostInput from '../Post-input/Post-input';
import Posts from '../Posts/Posts';
import './Profile.css';

const Profile = (props) => {
  const postElement = props.posts.map((post) => {
    return (
      <li className="profile__li" key={`posts-${post.id}`}>
        <Posts
          message={post.message}
          likeCount={post.likeCount}
          users={props.users}
          currentUserId={props.currentUserId}
        />
      </li>
    );
  });

  return (
    <div className="profile">
      <div className="profile__card">Profile Card</div>
      <div className="profile__message">
        <PostInput
          users={props.users}
          currentUserId={props.currentUserId}
          userPostText={props.userPostText}
          postPlaceholder={props.postPlaceholder}
          dispatch={props.dispatch}
        />
      </div>
      <ul className="profile__list">{postElement}</ul>
    </div>
  );
};

export default Profile;
