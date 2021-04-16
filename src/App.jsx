import Header from './components/Header/Header';
import Content from './components/Content/Content';
import './App.css';

function App(props) {
  return (
    <div className="app__wrapper">
      <div className="app__header">
        <Header
          profileItems={props.state.profile.profileItems}
          users={props.state.users}
          currentUserId={props.state.profile.currentUserId}
        />
      </div>
      <div className="app__content">
        <Content
          currentUserId={props.state.profile.currentUserId}
          users={props.state.users}
          userPostText={props.state.profile.userPostText}
          postPlaceholder={props.state.profile.postPlaceholder}
          messages={props.state.communication.messages}
          dialogs={props.state.communication.dialogs}
          posts={props.state.profile.posts}
          userMessageText={props.state.communication.userMessageText}
          messagePlaceholder={props.state.communication.messagePlaceholder}
          dispatch={props.dispatch}
        />
      </div>
    </div>
  );
}

export default App;
