import { useEffect, useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import PWABadge from "./PWABadge.tsx";
import appLogo from "/favicon.svg";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then(console.log);
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={appLogo} className="logo" alt="cakes-ui logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>cakes-ui</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <PWABadge />
    </>
  );
}

export default App;
