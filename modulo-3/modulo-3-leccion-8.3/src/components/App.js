// Fichero src/components/App.js (código con Switch)

import { Link, Route, Switch } from "react-router-dom";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <h1>Adalab</h1>
      <Switch>
        <Route path="/overview">
          <h2>Overview</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            blanditiis magnam earum molestiae, quam, dolorum repellendus
            quibusdam a rerum dolorem eius cumque dolore harum laboriosam
            commodi quisquam reiciendis, veniam animi?
          </p>
        </Route>
        <Route path="/repositories">
          <h2>Repositories</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            blanditiis magnam earum molestiae, quam, dolorum repellendus
            quibusdam a rerum dolorem eius cumque dolore harum laboriosam
            commodi quisquam reiciendis, veniam animi?
          </p>
        </Route>
        <Route path="/packages">
          <h2>Packages</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            blanditiis magnam earum molestiae, quam, dolorum repellendus
            quibusdam a rerum dolorem eius cumque dolore harum laboriosam
            commodi quisquam reiciendis, veniam animi?
          </p>
        </Route>
        <Route path="/people">
          <h2>People</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            blanditiis magnam earum molestiae, quam, dolorum repellendus
            quibusdam a rerum dolorem eius cumque dolore harum laboriosam
            commodi quisquam reiciendis, veniam animi?
          </p>
        </Route>
        <Route path="/teams">
          <h2>Teams</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            blanditiis magnam earum molestiae, quam, dolorum repellendus
            quibusdam a rerum dolorem eius cumque dolore harum laboriosam
            commodi quisquam reiciendis, veniam animi?
          </p>
        </Route>
        <Route path="/projects">
          <h2>Projects</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            blanditiis magnam earum molestiae, quam, dolorum repellendus
            quibusdam a rerum dolorem eius cumque dolore harum laboriosam
            commodi quisquam reiciendis, veniam animi?
          </p>
        </Route>
        <Route path="/settings">
          <h2>Settings</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            blanditiis magnam earum molestiae, quam, dolorum repellendus
            quibusdam a rerum dolorem eius cumque dolore harum laboriosam
            commodi quisquam reiciendis, veniam animi?
          </p>
        </Route>
        <Route path="*">
          <h3>Not Found Page!</h3>
        </Route>
      </Switch>

      <Header />
    </div>
  );
};

export default App;
