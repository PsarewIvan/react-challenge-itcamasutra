import HeaderContainer from './components/Header/HeaderContainer';
import Content from './components/Content/Content';
import './App.css';

function App() {
  return (
    <div className="app__wrapper">
      <div className="app__header">
        <HeaderContainer />
      </div>
      <div className="app__content">
        <Content />
      </div>
    </div>
  );
}

export default App;
