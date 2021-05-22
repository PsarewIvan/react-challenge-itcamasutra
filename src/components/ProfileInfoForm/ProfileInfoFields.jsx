import React from 'react';
import { useSelector } from 'react-redux';
import { Field } from 'react-final-form';

const ProfileInfoFields = () => {
  const lookingForAJob = useSelector(
    (state) => state.profile.profile.lookingForAJob
  );
  const lookingForAJobDescription = useSelector(
    (state) => state.profile.profile.lookingForAJobDescription
  );
  const contacts = useSelector((state) => state.profile.profile.contacts);
  const fullName = useSelector((state) => state.profile.profile.fullName);
  const aboutMe = useSelector((state) => state.profile.profile.aboutMe);

  return (
    <>
      <label className="profile-info-form__label">
        My name:
        <Field
          className="profile-info-form__input"
          name="fullName"
          component="input"
          type="text"
          initialValue={fullName}
        />
      </label>
      <label className="profile-info-form__label">
        About me:
        <Field
          className="profile-info-form__input"
          name="aboutMe"
          component="input"
          type="text"
          initialValue={aboutMe}
        />
      </label>
      <label className="profile-info-form__label">
        Looking for a job:
        <Field
          className="profile-info-form__input"
          name="lookingForAJob"
          component="input"
          type="checkbox"
          initialValue={lookingForAJob}
        />
      </label>
      <label className="profile-info-form__label">
        What kind of work are you interested in:
        <Field
          className="profile-info-form__textarea"
          name="lookingForAJobDescription"
          component="textarea"
          initialValue={lookingForAJobDescription}
        />
      </label>
      <fieldset>
        <legend>Contacts</legend>
        <label className="profile-info-form__label">
          Facebook:
          <Field
            className="profile-info-form__input"
            name="contacts.facebook"
            component="input"
            type="text"
            initialValue={contacts.facebook}
          />
        </label>
        <label className="profile-info-form__label">
          GitHub:
          <Field
            className="profile-info-form__input"
            name="contacts.github"
            component="input"
            type="text"
            initialValue={contacts.github}
          />
        </label>
        <label className="profile-info-form__label">
          Instagram:
          <Field
            className="profile-info-form__input"
            name="contacts.instagram"
            component="input"
            type="text"
            initialValue={contacts.instagram}
          />
        </label>
        <label className="profile-info-form__label">
          Your main link:
          <Field
            className="profile-info-form__input"
            name="contacts.mainLink"
            component="input"
            type="text"
            initialValue={contacts.mainLink}
          />
        </label>
        <label className="profile-info-form__label">
          Twitter:
          <Field
            className="profile-info-form__input"
            name="contacts.twitter"
            component="input"
            type="text"
            initialValue={contacts.twitter}
          />
        </label>
        <label className="profile-info-form__label">
          Vkontakte:
          <Field
            className="profile-info-form__input"
            name="contacts.vk"
            component="input"
            type="text"
            initialValue={contacts.vk}
          />
        </label>
        <label className="profile-info-form__label">
          Your website:
          <Field
            className="profile-info-form__input"
            name="contacts.website"
            component="input"
            type="text"
            initialValue={contacts.website}
          />
        </label>
        <label className="profile-info-form__label">
          YouTube:
          <Field
            className="profile-info-form__input"
            name="contacts.youtube"
            component="input"
            type="text"
            initialValue={contacts.youtube}
          />
        </label>
      </fieldset>
    </>
  );
};

export default React.memo(ProfileInfoFields);
