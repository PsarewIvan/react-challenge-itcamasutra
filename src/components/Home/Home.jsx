import Logo from './../Logo/Logo';
import LoginForm from './../LoginForm/LoginForm';
import NavContainer from './../Nav/NavContainer';
import './Home.css';

const Home = ({ isAuthorized, userId, login, authError }) => {
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
              isAuthorized={isAuthorized}
              userId={userId}
              login={login}
              authError={authError}
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
