import Header from './components/Header/Header';
import Content from './components/Content/Content';
import './App.css';

function App(props) {
  return (
    <div className="app__wrapper">
      <div className="app__header">
        <Header
          profileItems={props.data.profileItems}
          users={props.data.users}
          currentUserId={props.data.currentUserId}
        />
      </div>
      <div className="app__content">
        <Content
          currentUserId={props.data.currentUserId}
          users={props.data.users}
          messages={props.data.messages}
          dialogs={props.data.dialogs}
          posts={props.data.posts}
          userMessageText={props.data.userMessageText}
          messagePlaceholder={props.data.messagePlaceholder}
          dispatch={props.dispatch}
        />
      </div>
    </div>
  );
}

export default App;
