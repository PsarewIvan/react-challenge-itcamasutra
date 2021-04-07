import Header from './components/header/Header';
import Content from './components/content/Content';
import './app.css';

function App() {
  return (
    <div className="app__wrapper">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__content">
        <Content />
      </div>
    </div>
  );
}

export default App;
