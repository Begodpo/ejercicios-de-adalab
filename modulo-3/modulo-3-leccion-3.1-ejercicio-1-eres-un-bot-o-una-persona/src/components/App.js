// Fichero src/components/App.js
// imporamos useEffect además de useState
import { useEffect, useState } from "react";

const App = () => {
  // Estados

  const [starWarsData, setStarWarsData] = useState({});
  console.log(starWarsData);

  // Llamar al api con useEffect

  useEffect(() => {
    // Dentro de useEffect llamamos al API
    fetch("https://swapi.dev/api/people/5") // El 5 es el id de la Princesa Leia
      .then((response) => response.json())
      .then((responseData) => {
        // Cuando el API responde guardamos los datos en el estado para que se re-renderice el componente
        setStarWarsData(responseData);
      });
  }, []);

  return (
    <div>
      <h1>Llamar al API de Star Wars</h1>
      <h2>Características de {starWarsData.name}</h2>

      <ul>
        <li>Año de nacimiento: {starWarsData.birth_year}</li>
        <li>Estatura: {starWarsData.height} cm</li>
        <li>Peso: {starWarsData.mass} Kg</li>
        <li>Color de ojos: {starWarsData.eye_color}</li>
      </ul>
    </div>
  );
};

export default App;

/*import "../styles/App.scss";
import { useState } from "react";

const App = () => {
  const [macarrones, setMacarrones] = useState(false);
  const [patatas, setPatatas] = useState(false);
  const [nueces, setNueces] = useState(false);
  const [huevos, setHuevos] = useState(false);
  const [cebolla, setCebolla] = useState(false);
  const [cerveza, setCerveza] = useState(false);

  const handleMacarrones = (ev) => {
    setMacarrones(ev.target.checked);
  };
  const handlePatatas = (ev) => {
    setMacarrones(ev.target.checked);
  };
  const handleNueces = (ev) => {
    setMacarrones(ev.target.checked);
  };
  const handleHuevos = (ev) => {
    setMacarrones(ev.target.checked);
  };
  const handleCebolla = (ev) => {
    setMacarrones(ev.target.checked);
  };
  const handleCerveza = (ev) => {
    setMacarrones(ev.target.checked);
  };

  return (
    <div>
      <h1>Selecciona los ingredientes de la tortilla de patatas</h1>
      <form>
        <label htmlFor="macarrones">Macarrones</label>
        <input
          type="checkbox"
          name="ingredient"
          id="ing-macarrones"
          value={macarrones}
          onChange={handleMacarrones
        />
        <label htmlFor="patatas">Patatas</label>
        <input
          type="checkbox"
          name="ingredient"
          id="ing-patatas"
          value={patatas}
          onChange={handlePatatas}
        />
        <label htmlFor="nueces">Nueces</label>
        <input
          type="checkbox"
          name="ingredient"
          id="ing-nueces"
          value={nueces}
          onChange={handleNueces}
        />
        <label htmlFor="huevos">Huevos</label>
        <input
          type="checkbox"
          name="ingredient"
          id="ing-huevos"
          value={huevos}
          onChange={handleHuevos}
        />
        <label htmlFor="cebolla">Cebolla</label>
        <input
          type="checkbox"
          name="ingredient"
          id="ing-cebolla"
          value={cebolla}
          onChange={handleCebolla}
        />
        <label htmlFor="cerveza">Cerveza</label>
        <input
          type="checkbox"
          name="ingredient"
          id="ing-cerveza"
          value={cerveza}
          onChange={handleCerveza}
        />
      </form>
      <p></p>
    </div>
  );
};

export default App;*/
