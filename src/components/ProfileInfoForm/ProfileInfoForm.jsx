import React from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-final-form';
import { updateProfileInfo } from './../../redux/profile-reducer';
import ProfileInfoFields from './ProfileInfoFields';
import './ProfileInfoForm.scss';

const ProfileInfoForm = ({ closeEditComponent }) => {
  const dispatch = useDispatch();
  const onSubmit = (formState) => {
    closeEditComponent();
    dispatch(updateProfileInfo(formState));
  };

  return (
    <div className="profile-info-form">
      <h3 className="profile-info-form__title">Edit Profile</h3>
      <Form
        onSubmit={onSubmit}
        subscription={{ submitting: true, pristine: true }}
        render={({ handleSubmit, submitting }) => (
          <form className="profile-info-form" onSubmit={handleSubmit}>
            <ProfileInfoFields />
            <button
              className="profile-info-form__submit"
              type="submit"
              disabled={submitting}
            >
              Save changes
            </button>
            <button
              className="profile-info-form__close"
              type="button"
              onClick={closeEditComponent}
            >
              Close without changes
            </button>
          </form>
        )}
      />
    </div>
  );
};

export default React.memo(ProfileInfoForm);
