import Header from './components/header/Header';
import Content from './components/content/Content';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './app.css';

function App() {
  return (
    <Router>
      <div className="app__wrapper">
        <div className="app__header">
          <Header />
        </div>
        <div className="app__content">
          <Content />
        </div>
      </div>
    </Router>
  );
}

export default App;
