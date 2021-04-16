import PostInputContainer from '../PostInput/PostInputContainer';
import Posts from '../Posts/Posts';
import './Profile.css';

const Profile = (props) => {
  return (
    <div className="profile">
      <div className="profile__card">Profile Card</div>
      <div className="profile__message">
        <PostInputContainer />
      </div>
      <div className="profile__posts">
        <Posts
          users={props.users}
          currentUserId={props.currentUserId}
          posts={props.posts}
        />
      </div>
    </div>
  );
};

export default Profile;
