import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ResumePaste from "./components/ResumePaste";
import { render } from "react-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Resume Amplify</h1>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <div className="container">
              <About />
              <ResumePaste />
            </div>
          </Route>
          <Route path="/How does it work?" />
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

render(<App />, document.getElementById("root"));
