import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "react-dom";
import "./App.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ResumePaste from "./components/ResumePaste";
import Progressbar from "./components/Progressbar";

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

          <Route path="/results" component={Progressbar} />
        </Switch>
      </Router>
    </div>
  );
}

render(<App />, document.getElementById("root"));
