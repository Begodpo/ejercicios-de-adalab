import "../styles/App.scss";

function App() {
  const handleInput = (ev) => {
    console.log("La última teclada pulsada es: ", ev.key);
  };

  const handleEnterKey = (ev) => {
    ev.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleEnterKey}>
        <label htmlFor="">Escribe algo aquí: </label>
        <input type="text" onKeyPress={handleInput} />
      </form>
    </div>
  );
}

export default App;
