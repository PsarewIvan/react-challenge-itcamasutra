import { useState } from 'react';
import ProfileHeader from './../ProfileHeader/ProfileHeader';
import NavContainer from './../Nav/NavContainer';
import PostForm from '../PostForm/PostForm';
import Posts from '../Posts/Posts';
import ProfileJob from './../ProfileJob/ProfileJob';
import ProfileSocials from './../ProfileSocials/ProfileSocials';
import Loader from './../Loader/Loader';
import ProfileInfoForm from './../ProfileInfoForm/ProfileInfoForm';
import './Profile.css';

const Profile = ({
  profile,
  status,
  updateUserStatus,
  photos,
  addPost,
  posts,
}) => {
  const [isInfoEdit, setEditMod] = useState(false);

  const openEditComponent = () => {
    setEditMod(true);
  };

  const closeEditComponent = () => {
    setEditMod(false);
  };

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
            openEditComponent={openEditComponent}
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
            {isInfoEdit ? (
              <ProfileInfoForm closeEditComponent={closeEditComponent} />
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
