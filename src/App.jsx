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
        <Content />
      </div>
    </div>
  );
}

export default App;
