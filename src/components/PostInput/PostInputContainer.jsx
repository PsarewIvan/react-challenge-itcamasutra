import PostInput from './PostInput';
import { Context } from './../../MyContext';
import {
  addPostCreator,
  changePostMessageCreator,
} from '../../redux/profile-reducer';

const PostInputContainer = () => {
  return (
    <Context.Consumer>
      {(store) => {
        const profile = store.getState().profile;
        const users = store.getState().users;
        let currentUserName = '';

        users.forEach((user) => {
          if (user.id === profile.currentUserId) {
            currentUserName = user.name.split(' ')[0];
          }
        });

        const handleButtonClick = () => {
          store.dispatch(addPostCreator());
        };

        const handleTextareaInput = (message) => {
          store.dispatch(changePostMessageCreator(message));
        };
        return (
          <PostInput
            addPost={handleButtonClick}
            changePostMessage={handleTextareaInput}
            users={users}
            currentUserId={profile.currentUserId}
            userPostText={profile.userPostText}
            postPlaceholder={profile.postPlaceholder}
            currentUserName={currentUserName}
          />
        );
      }}
    </Context.Consumer>
  );
};

export default PostInputContainer;
