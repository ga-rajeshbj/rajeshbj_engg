import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MianPage from "./containers/MianPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={MianPage} />
            <Route exact path="/CountryDetail" component={CountryDetails} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
