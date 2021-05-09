import Logo from './../Logo/Logo';
import LoginForm from './../LoginForm/LoginForm';
import NavContainer from './../Nav/NavContainer';
import './Home.css';

const Home = (props) => {
  return (
    <div className="home">
      <div className="home__background-overlay">
        <div className="home__wrapper">
          <div className="home__logo">
            <Logo />
          </div>
          <h1 className="home__title">Welcome</h1>
          <p className="home__description">
            This is Itcamasutra Social Network
          </p>
          <div className="home__login-form">
            <LoginForm
              isAuthorized={props.isAuthorized}
              userId={props.userId}
              login={props.login}
              authError={props.authError}
            />
          </div>
          <div className="home__nav">
            <NavContainer type="home" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
