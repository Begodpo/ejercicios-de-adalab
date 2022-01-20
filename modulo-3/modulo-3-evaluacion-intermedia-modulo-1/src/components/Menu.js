import LinkMenu from "./Link";
const Menu = () => {
  return (
    <nav className="navContainer">
      <ul className="menu">
        <LinkMenu text="Blog" openInNewTab />
        <LinkMenu text="Contacto" />
      </ul>
    </nav>
  );
};

export default Menu;
