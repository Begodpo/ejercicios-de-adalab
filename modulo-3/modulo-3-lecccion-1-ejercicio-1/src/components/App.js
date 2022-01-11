import "../styles/App.scss";
import logo from "../images/adalab-logo-155x61.png";

function App() {
  return (
    <div>
      <header className="header">
        <a className="header__linkLogo" href="https://adalab.es/">
          <img
            title="Adalab Logo"
            className="header__imgLogo"
            src={logo}
            alt="Adalab logo"
          />
        </a>
        <nav className="navContainer">
          <ul className="menu">
            <li className="menu__item1">
              <a className="link-menu" href="#">
                Blog
              </a>
            </li>
            <li className="menu__item2">
              <a className="link-menu" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="mainContainer">
        <h1 className="mainContainer__title">Creando diversidad digital</h1>
      </main>
    </div>
  );
}

export default App;
