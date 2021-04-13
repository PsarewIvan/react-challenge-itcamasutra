import './Logo.css';
import logo from './logo.svg';

const Logo = () => {
  return (
    <div className="logo">
      <img className="logo__img" src={logo} alt="mock logo"></img>
      <span className="logo__text">Social Network</span>
    </div>
  );
};

export default Logo;
