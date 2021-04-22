import Logo from './../Logo/Logo';
import LoginForm from './../LoginForm/LoginForm';
import Nav from './../Nav/Nav';

const Home = (props) => {
  return (
    <div className="home">
      <div className="home__logo">
        <Logo />
      </div>
      <h1 className="home__title">Welcome</h1>
      <p className="home__description">This is Itcamasutra Social Network</p>
      <div className="home__login-form">
        <LoginForm
          buttonSubmitText={props.buttonSubmitText}
          emailPlaceholder={props.emailPlaceholder}
          passwordAriaText={props.passwordAriaText}
          passwordPlaceholder={props.passwordPlaceholder}
          emailAriaText={props.emailAriaText}
        />
      </div>
      <div className="home__nav">
        <Nav type="home" />
      </div>
    </div>
  );
};

export default Home;
