import "../styles/App.scss";
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClickBtn = (ev) => {
    ev.preventDefault();
    setCounter(counter + 1);
    console.log(counter);
  };

  const handleClickReset = (ev) => {
    ev.preventDefault();
    setCounter(0);
  };

  return (
    <div>
      <h1>Contador</h1>
      <form action="">
        <input type="text" value={counter} />
        <button onClick={handleClickBtn}>Incrementar</button>
        <button onClick={handleClickReset}>Reset</button>
      </form>
    </div>
  );
};

export default App;
