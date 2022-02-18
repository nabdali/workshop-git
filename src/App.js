import { useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const textInput = useRef(null);
  const [state, setState] = useState("");
  // const password = "rdz484zfc87ef8454fe5";
  function handleClick() {
    textInput.current.focus();

    textInput.current.innerHTML = state;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input
          type="text"
          ref={textInput}
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <input
          type="button"
          value="Donner le focus au champ texte"
          onClick={handleClick}
        />
        <p>
          {" "}
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Env : {process.env.REACT_APP_VERCEL_ENV}, commit :{" "}
          {process.env.REACT_APP_VERCEL_GIT_COMMIT_MESSAGE}, by:{" "}
          {process.env.REACT_APP_VERCEL_GIT_COMMIT_AUTHOR_NAME}
        </p>
        <a
          about="App-link"
          href="https://git-scm.com/doc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Git
        </a>
      </header>
    </div>
  );
}

export default App;
