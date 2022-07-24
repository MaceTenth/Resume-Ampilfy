import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import { render } from "react-dom";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  function handleSend(content) {
    // let resumeSend = JSON.stringify({ text: content });
    // console.log(resumeSend);
    setResult(content);
  }

  return (
    <div className="App">
      <h1>Resume Amplify</h1>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Main handleSend={handleSend} />
          </Route>
          <Route path="/explain" />
          <Route path="/result">
            <Result result={result} />
          </Route>
          <Route path="/Contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

render(<App />, document.getElementById("root"));
