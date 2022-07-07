import {render} from "react-dom";
import "./style/index.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ResumePaste from "./components/ResumePaste";
import HowDoesItWork from "./components/HowDoesItWork";
import Contact from "./components/Contact";
import initializePlugins from "./plugins";

function App() {
    initializePlugins()

    return (
        <div className="App">
            <h1>Resume Amplify</h1>
            <Navbar/>
            <Switch>
                <Route path="/" exact>
                    <div className="container">
                        <About/>
                        <ResumePaste/>
                    </div>
                </Route>
                <Route path="/how-does-it-work">
                    <HowDoesItWork/>
                </Route>
                <Route path="/Contact">
                    <Contact/>
                </Route>
            </Switch>
        </div>
    )
}

render(
    <Router>
        <App/>
    </Router>,
    document.getElementById("root")
)
