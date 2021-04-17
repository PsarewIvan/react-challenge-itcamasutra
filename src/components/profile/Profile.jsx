import PostInput from '../PostInput/PostInput';
import Posts from '../Posts/Posts';
import './Profile.css';

const Profile = (props) => {
  return (
    <div className="profile">
      <div className="profile__card">Profile Card</div>
      <div className="profile__message">
        <PostInput
          userName={props.userName}
          userPostText={props.userPostText}
          postPlaceholder={props.postPlaceholder}
          changePostMessage={props.changePostMessage}
          addPost={props.addPost}
        />
      </div>
      <div className="profile__posts">
        <Posts userName={props.userName} posts={props.posts} />
      </div>
    </div>
  );
};

export default Profile;
