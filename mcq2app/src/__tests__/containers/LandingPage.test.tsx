import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import React from "react";

import { store } from "../../redux/store"
import LandingPage from "../../containers/LandingPage";



describe("Test UserForm component", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    jest.useFakeTimers();

    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <Provider store={store}>
            <LandingPage />
          </Provider>
        </BrowserRouter>
      </React.StrictMode>,
      container
    );
    jest.advanceTimersByTime(1000);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });
  it("Should render UserForm component initialy", () => {
    const inputs = container.querySelectorAll("input");
    expect(inputs).toHaveLength(3);
  });
});
