import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { render } from "react-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Resume Amplify</h1>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/explain" />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

render(<App />, document.getElementById("root"));
