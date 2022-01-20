import Logo from "./Logo";
import Menu from "./Menu";
import "../styles/components/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;
