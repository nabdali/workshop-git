import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
