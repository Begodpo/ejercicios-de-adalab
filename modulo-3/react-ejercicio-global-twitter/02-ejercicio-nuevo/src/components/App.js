import { useEffect, useState } from "react";
import adalabBanner from "../images/adalab-banner.jpg";
import adalabLogo from "../images/adalab-logo.png";
import getTweets from "../services/api";
import ls from "../services/local-storage";
import "../styles/App.scss";

getTweets();

function App() {
  // state
  const [composeIsOpen, setComposeIsOpen] = useState(false); // Es false porque al arrancar la página no queremos que esté la ventana del compose abierta.
  const [composeText, setComposeText] = useState(ls.get("composeText", "")); // estado para guardar lo que escribe la usuaria en el compose. Al principio estaba vacío, pero al hacer lo del localStorage, le indicamos que lo lea, y si la propiedad composeText existe la usamos, si no, usamos un string vacío.
  const [tweets, setTweets] = useState([]); // cogemos el valor inicial del array para que aparezcan los cinco listado que ya tenemos pintados

  // effects
  useEffect(() => {
    getTweets().then((data) => {
      setTweets(data);
    }); // Aquí iriá el fetch. Como ya lo he hecho en el fichero de api.js, por eso ejecuto esa función aquí.
  }, []); // array vacío como segundo parámetro, para que sólo se ejecute una vez la llamada al fetch

  useEffect(() => {
    ls.set("composeText", composeText); // guardamos lo que escribe la usuaria
    console.log("me ejecuto");
  }, [composeText]); // aquí le estamos diciendo que solo se ejecute cuando cambie composeText

  // events
  const handleToggleCompose = () => {
    setComposeIsOpen(!composeIsOpen); // lo que hago es negar el valor actual, de modo que cuando hago clic en el botón cambia el estado
  };

  const handleComposeText = (ev) => {
    // función manejadora del texto del compose. Ejecutamos la funció setComposeText con el value que estamos recibiendo del evento
    setComposeText(ev.target.value);
  };

  const handleComposeSubmit = (ev) => {
    ev.preventDefault();
    tweets.unshift({
      id: "1234856sadf",
      avatar: "http://localhost:3000/assets/avatars/user-me.jpg",
      user: "Adalab",
      username: "adalab_digital",
      date: "6 sep. 2021",
      text: composeText,
      comments: 0,
      retweets: 0,
      likes: 0,
    });
    setTweets([...tweets]); // Para que se añadan los datos nuevos al array
    setComposeIsOpen(false); // Para que se cierre la ventana al pinchar en twittear
    setComposeText(""); // Función manejadora del texto, para que cuando vuelva a abrir la ventana ya no salga el mensaje que se escribió antes
  };

  // render helpers

  const renderHeader = () => {
    // Función para limpiar el código de abajo, ya que cuesta encontrar las cosas
    return (
      <header className="header">
        <nav className="menu">
          <ul className="menu__items">
            <li className="menu__item menu__item--twitter">
              <a className="menu__link" href="/home" title="Ir">
                <span className="text">Ir al inicio</span>
              </a>
            </li>

            <li className="menu__item menu__item--home">
              <a className="menu__link" href="/home" title="Ir">
                <span className="text">Ir al inicio</span>
              </a>
            </li>

            <li className="menu__item menu__item--search">
              <a className="menu__link" href="/search" title="Buscar">
                <span className="text">Buscar</span>
              </a>
            </li>

            <li className="menu__item menu__item--profile">
              <a className="menu__link" href="/profile" title="Perfil">
                <span className="text">Perfil</span>
              </a>
            </li>

            <li className="menu__item menu__item--tweet">
              <button
                className="menu__link"
                title="Twittear"
                onClick={handleToggleCompose} // Esta función manejadora va a intercambiar (toggleguear) el estado de la ventana
              >
                <span className="text">Twittear</span>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    );
  };

  const renderMainHeader = () => {
    // Igual que la de header, para limpiar
    return (
      <section className="main__header">
        <header>
          <h1 className="header__title">
            <span className="header__account">Adalab</span>
            <span className="header__tweets">6.762 Tweets</span>
          </h1>

          <img src={adalabBanner} alt="Banner de Adalab" />

          <div className="header__content">
            <div className="header__profile-image">
              <img src={adalabLogo} alt="Imagen de perfil de Adalab" />
            </div>

            <div className="header__actions">
              <button className="header__follow-btn">Siguiendo</button>
            </div>

            <div className="header__account-info">
              <span className="header__acount-title">Adalab</span>
              <span className="header__acount-username">@Adalab_Digital</span>
              <span className="header__acount-follow">Te sigue</span>
            </div>

            <h2 className="header__account-description">
              👩‍💻 Tecnóloga mujer Escuela de programación web para mujeres.{" "}
              <br />
              📅 Calendario espiralado Próximo curso: noviembre 2021. <br />
              📌 Clases online en directo.
              <br />
              🚀 Aprende a programar en solo 12 semanas.
            </h2>

            <div className="header__account-data">
              <span className="header__account-region">
                Madrid, Comunidad de Madrid
              </span>
              <a className="header__account-link" href="https://adalab.es">
                adalab.es
              </a>
              <span className="header__account-date">
                Se unió en agosto de 2016
              </span>
            </div>

            <div className="header__followers-info">
              <span className="header__following">
                <span className="header__followers-number">1.908</span>{" "}
                Siguiendo
              </span>
              <span className="header__followers">
                <span className="header__followers-number">5.601</span>{" "}
                Seguidores
              </span>
            </div>
          </div>
        </header>
      </section>
    );
  };

  const renderComposeModal = () => {
    // La ejecuto más abajo, donde correspondía en el html
    const isButtonDisabled = composeText.length === 0; // guardo el valor de disabled( que es un booleano) en esta constante y ahora tengo que hacer true o false dependa de composeText (del valor del texto en cada momento). Le digo que el botón está deshabilitado cuando la longitud del texto es 0.

    if (composeIsOpen) {
      // Si composIsOpen es true (está abierto), retorno el código para que lo pinte
      return (
        <div className="compose__modal-overlay">
          <form onSubmit={handleComposeSubmit}>
            <div className="compose__modal-wrapper">
              <div className="compose__modal-header">
                <button
                  className="compose__modal-close-btn"
                  onClick={handleToggleCompose} // utilizo la misma función manejadora que le ha hecho aparecer. Al hacer click desaparecerá
                >
                  Cerrar
                </button>
              </div>
              <div className="compose__modal-content">
                <img
                  className="compose__profile-logo"
                  src={adalabLogo}
                  alt="Logo de Adalab"
                />
                <textarea
                  className="compose__profile-textarea"
                  placeholder="¿Qué está pasando?"
                  value={composeText}
                  onChange={handleComposeText}
                />
              </div>
              <div className="compose__modal-footer">
                <button
                  className="compose__modal-tweet-btn"
                  disabled={isButtonDisabled}
                >
                  Twittear
                </button>
              </div>
            </div>
          </form>
        </div>
      );
    }
  };

  const renderTweets = () => {
    return tweets.map(
      // mapeando el array de tweets
      (tweet) => {
        return (
          <li key={tweet.id}>
            <article className="tweet__wrapper"></article>
            <img
              className="tweet__avatar"
              src={tweet.avatar}
              alt={`Avatar de ${tweet.user}`}
            />
            <div className="tweet__content">
              <p className="tweet__info">
                <span className="tweet__user">{tweet.user}</span>
                <span className="tweet__username">{tweet.username}</span>
                <span className="tweet__date">{tweet.date}</span>
              </p>
              <p className="tweet__text">{tweet.text}</p>
              <ul className="tweet__actions">
                <li className="tweet__comments">{tweet.comments}</li>
                <li className="tweet__retweets">{tweet.retweets}</li>
                <li className="tweet__likes">{tweet.likes}</li>
                <li className="tweet__share">
                  <span className="tweet__share--text">Compartir</span>
                </li>
              </ul>
            </div>
          </li>
        );
      }
    );
  };

  return (
    <div>
      <div className="page">
        {renderHeader()}

        <main className="main">
          {renderMainHeader()}
          <ul>{renderTweets()}</ul>
          {renderComposeModal()}
        </main>
      </div>
    </div>
  );
}

export default App;
