import logo from "./logo.svg";

import { render } from "react-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Resume Amplify</h1>
      </header>
    </div>
  );
}

render(<App />, document.getElementById("root"));
