import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);

  function addValue() {
    if (counter === 0) setCounter(counter);

    counter = counter + 1;
    setCounter(counter);
  }

  function decreaseValue() {
    if (counter === 0) setCounter(counter);

    counter = counter - 1;
    setCounter(counter);
  }

  return (
    <>
      <h1>The React Counter App</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={decreaseValue}>Remove Value</button>
      <br />
      <br />
      <h3>Using useState Hook in this Project</h3>
    </>
  );
}

export default App;
