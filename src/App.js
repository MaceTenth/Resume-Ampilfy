import {render} from "react-dom";
import "./style/index.css";
import Routes from "./routes";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <h1>Resume Amplify</h1>
            <Router>
                <Routes/>
            </Router>
        </div>
    )
}

render(
    <App/>,
    document.getElementById("root")
);
