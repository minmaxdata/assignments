import React from "react";
import "./App.css";

function App() {
  const [state, setState] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  const [isActive, setIsActive] = React.useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }
  React.useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <h1>counter</h1>
      <div>
        <div className="time">{state}</div>
        <button onClick={() => setState((state) => state + 1)}> Add </button>
        <button onClick={() => setState((state) => state - 1)}>
          {" "}
          Subtract{" "}
        </button>
      </div>
      <div className="time">{seconds}s</div>
      <div className="row">
        <button
          className={`button button-primary button-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
