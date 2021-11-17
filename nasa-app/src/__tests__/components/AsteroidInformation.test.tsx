import * as React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import App from "../../App";
import AsteroidInformation from "../../components/AsteroidInformation"
it("renders location state", () => {
    const history = createMemoryHistory();
    const state = {
        id: 1234,
        nasa_jpl_url: "https theujwh",
        is_potentially_hazardous_asteroid: "yes",
        name: "rajesh"
    }
    history.push(`./astroidDetails/${state.id}/${state.name}`, state);

    const { getByText, getByTestId } = render(
        <Router history={history}>
            <AsteroidInformation />
        </Router>
    );

    getByText(`nasa_jpl_url : ${state.nasa_jpl_url}`);
    expect(getByTestId("data-id")).toBeTruthy()

});