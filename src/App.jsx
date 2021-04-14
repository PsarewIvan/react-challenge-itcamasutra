import Header from './components/Header/Header';
import Content from './components/Content/Content';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App(props) {
  return (
    <Router>
      <div className="app__wrapper">
        <div className="app__header">
          <Header />
        </div>
        <div className="app__content">
          <Content
            messages={props.data.messages}
            dialogs={props.data.dialogs}
            posts={props.data.posts}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
