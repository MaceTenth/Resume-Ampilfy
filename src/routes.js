import Navbar from "./components/Navbar";
import {Route, Switch} from "react-router-dom";
import About from "./components/About";
import ResumePaste from "./components/ResumePaste";
import Contact from "./components/Contact";
import initializePlugins from "./plugins";
import HowDoesItWork from "./components/HowDoesItWork";


const Routes = () => {
    initializePlugins()

    return (
        <>
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
        </>
    )
}

export default Routes
