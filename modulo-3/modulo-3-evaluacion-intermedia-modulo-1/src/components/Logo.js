import logo from "../images/adalab-logo-155x61.png";

const Logo = () => {
  return (
    <a className="header__linkLogo" href="https://adalab.es/">
      <img
        title="Adalab Logo"
        className="header__imgLogo"
        src={logo}
        alt="Adalab logo"
      />
    </a>
  );
};

export default Logo;
