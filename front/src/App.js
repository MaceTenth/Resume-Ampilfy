import { render } from "react-dom";
import "./App.css";
import { ContactPage } from "./components/contact/ContactPage";

function App() {
  return (
    <div className="App">
      <ContactPage />
    </div>
  );
}

render(<App />, document.getElementById("root"));
