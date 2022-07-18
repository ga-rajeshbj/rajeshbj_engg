import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './container/LandingPage';
import { Routes, Route, Link } from "react-router-dom";
import ParkSpots from './container/ParkSpots';
import CarDetails from './container/CarDetails';
import { Provider } from "react-redux"
import { store } from "./redux/store"

function App() {
  const notify = () => toast("Wow so easy !");

  return (
    <div>
      {/* <button onClick={notify}>Notify !</button> */}
      {/* <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
      {/* Same as */}

      <Provider store={store}>

        {/* <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path={"/parkspaces"} component={ParkSpots} />
            <Route exact path="/cardetails" component={CarDetails} />
          </Switch>

        </Router> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path={"/parkspaces"} element={<ParkSpots />} />
          <Route path="/cardetails" element={<CarDetails />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
