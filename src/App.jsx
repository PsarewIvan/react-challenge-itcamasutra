import Header from './components/Header/Header';
import Content from './components/Content/Content';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

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
