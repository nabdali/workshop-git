import { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const textInput = useRef(null);
  const password = "rdz484zfc87ef8454fe5";
  function handleClick() {
    textInput.current.focus();

    textInput.current.innerHTML = `<img src='x' onerror='alert(\"I m Mr ROBOT !\ ${password}")'>`;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" ref={textInput} />
        <input
          type="button"
          value="Donner le focus au champ texte"
          onClick={handleClick}
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Env : {process.env.REACT_APP_VERCEL_ENV}, commit :{" "}
          {process.env.REACT_APP_VERCEL_GIT_COMMIT_MESSAGE}, by:{" "}
          {process.env.REACT_APP_VERCEL_GIT_COMMIT_AUTHOR_NAME}
        </p>
        <a
          about="App-link"
          href="https://reactjs.org"
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
