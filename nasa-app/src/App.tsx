import "./App.css";
import FindingForm from "./container/FindingForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AsteroidInformation from "./components/AsteroidInformation";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={FindingForm} />
          <Route
            exact
            path="/astroidDetails/:id/:name"
            component={AsteroidInformation}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
