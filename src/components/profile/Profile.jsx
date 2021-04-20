import ProfileHeader from './../ProfileHeader/ProfileHeader';
import Nav from './../Nav/Nav';
import PostInput from '../PostInput/PostInput';
import Posts from '../Posts/Posts';
import ProfileJob from './../ProfileJob/ProfileJob';
import ProfileSocials from './../ProfileSocials/ProfileSocials';
import './Profile.css';

const Profile = (props) => {
  return (
    <div className="profile">
      <div className="profile__wrapper-header">
        <div className="profile__header">
          <ProfileHeader />
        </div>
      </div>
      <div className="profile__nav">
        <Nav />
      </div>
      <div className="profile__main-wrapper">
        <div className="profile__main">
          <div className="profile__aside">
            <div className="profile__job">
              <ProfileJob />
            </div>
            <div className="profile__socials">
              <ProfileSocials />
            </div>
          </div>
          <div className="profile__content">
            <div className="profile__message">
              <PostInput
                userName={props.userName}
                photos={props.photos}
                userPostText={props.userPostText}
                postPlaceholder={props.postPlaceholder}
                changePostMessage={props.changePostMessage}
                addPost={props.addPost}
              />
            </div>
            <div className="profile__posts">
              <Posts
                userName={props.userName}
                posts={props.posts}
                photos={props.photos}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
