import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import LandingPage from "./containers/LandingPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import McqContainer from "./containers/McqContainer";
import ResultPage from "./containers/ResultPage";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/resultPage" component={ResultPage} />
            <Route exact path="/mcqcontainer">
              <McqContainer />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
