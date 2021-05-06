import ProfileHeader from './../ProfileHeader/ProfileHeader';
import NavContainer from './../Nav/NavContainer';
import PostInput from '../PostInput/PostInput';
import Posts from '../Posts/Posts';
import ProfileJob from './../ProfileJob/ProfileJob';
import ProfileSocials from './../ProfileSocials/ProfileSocials';
import Loader from './../Loader/Loader';
import './Profile.css';

const Profile = (props) => {
  const profile = props.profile;
  console.log(props);

  if (!profile) {
    return <Loader />;
  }

  return (
    <div className="profile">
      <div className="profile__wrapper-header">
        <div className="profile__header">
          <ProfileHeader
            photo={profile.photos.large}
            about={profile.aboutMe}
            fullName={profile.fullName}
          />
        </div>
      </div>
      <div className="profile__nav">
        <NavContainer />
      </div>
      <div className="profile__main-wrapper">
        <div className="profile__main">
          <div className="profile__aside">
            <div className="profile__job">
              <ProfileJob
                lookingForAJob={profile.lookingForAJob}
                lookingForAJobDescription={profile.lookingForAJobDescription}
              />
            </div>
            <div className="profile__socials">
              <ProfileSocials contacts={profile.contacts} />
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
