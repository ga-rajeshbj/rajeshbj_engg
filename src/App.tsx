import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";

import TableContainer from "./container/TableContainer";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TableContainer />
      </Provider>
    </div>
  );
}

export default App;
