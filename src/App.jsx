import Header from './components/Header/Header';
import Content from './components/Content/Content';
import './App.css';

function App(props) {
  return (
    <div className="app__wrapper">
      <div className="app__header">
        <Header
          profileItems={props.data.profile.profileItems}
          users={props.data.users}
          currentUserId={props.data.profile.currentUserId}
        />
      </div>
      <div className="app__content">
        <Content
          currentUserId={props.data.profile.currentUserId}
          users={props.data.users}
          messages={props.data.communication.messages}
          dialogs={props.data.communication.dialogs}
          posts={props.data.profile.posts}
          userMessageText={props.data.communication.userMessageText}
          messagePlaceholder={props.data.communication.messagePlaceholder}
          dispatch={props.dispatch}
        />
      </div>
    </div>
  );
}

export default App;
