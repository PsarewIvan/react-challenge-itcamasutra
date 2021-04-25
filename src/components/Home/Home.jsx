import Logo from './../Logo/Logo';
import LoginForm from './../LoginForm/LoginForm';
import Nav from './../Nav/Nav';
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
              buttonSubmitText={props.buttonSubmitText}
              emailPlaceholder={props.emailPlaceholder}
              passwordAriaText={props.passwordAriaText}
              passwordPlaceholder={props.passwordPlaceholder}
              emailAriaText={props.emailAriaText}
              emailMessageText={props.emailMessageText}
              passwordMessageText={props.passwordMessageText}
              onChangeEmailText={props.changeEmailText}
              onChangePasswordText={props.changePasswordText}
            />
          </div>
          <div className="home__nav">
            <Nav type="home" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
