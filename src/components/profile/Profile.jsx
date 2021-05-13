import ProfileHeader from './../ProfileHeader/ProfileHeader';
import NavContainer from './../Nav/NavContainer';
import PostForm from '../PostForm/PostForm';
import Posts from '../Posts/Posts';
import ProfileJob from './../ProfileJob/ProfileJob';
import ProfileSocials from './../ProfileSocials/ProfileSocials';
import Loader from './../Loader/Loader';
import './Profile.css';

const Profile = ({
  profile,
  status,
  updateUserStatus,
  photos,
  addPost,
  posts,
}) => {
  if (!profile) {
    return <Loader />;
  }

  return (
    <div className="profile">
      <div className="profile__wrapper-header">
        <div className="profile__header">
          <ProfileHeader
            photo={profile.photos.large}
            fullName={profile.fullName}
            userId={profile.userId}
            status={status}
            updateStatus={updateUserStatus}
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
              <PostForm
                userName={profile.fullName}
                photos={photos}
                addPost={addPost}
              />
            </div>
            <div className="profile__posts">
              <Posts
                userName={profile.fullName}
                posts={posts}
                photos={photos}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
