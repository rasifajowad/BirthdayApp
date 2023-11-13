import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople((currentState) => {
      return (currentState = []);
    });
  };

  return (
    <main>
      <div className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} key={people.id} />
        <button type="button" className="btn btn-block" onClick={clearAll}>
          Clear All
        </button>
      </div>
    </main>
  );
};
export default App;
