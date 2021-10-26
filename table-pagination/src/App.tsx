import "./App.css";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import TableContainer from "./container/TableContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={TableContainer} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
