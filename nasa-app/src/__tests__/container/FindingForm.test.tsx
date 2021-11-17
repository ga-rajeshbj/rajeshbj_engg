import * as ReactDOM from "react-dom";
import App from '../../App'
import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { Home } from '../components/Home';
import userEvent from "@testing-library/user-event";
// import AsteroidInformation from "../../components/"

afterEach(cleanup);

let container: HTMLDivElement;

beforeAll(() => {

    container = document.createElement("div");

    document.body.appendChild(container);

    ReactDOM.render(<React.StrictMode>

        <App />

    </React.StrictMode>, container);

    jest.useFakeTimers()

})



afterAll(() => {

    jest.useRealTimers()

})



test('should render component', () => {

    const findFormContainer = screen.queryByTestId("findFormContainer")

    expect(findFormContainer).toBeInTheDocument();



});

test('should render component', () => {

    const findFormContainer = screen.queryByTestId("findFormContainer")

    expect(findFormContainer).toBeInTheDocument();


    const inputs = container.querySelectorAll("input");
    expect(inputs).toHaveLength(1);

});




// test('TextField value written', () => {

//     const inputs = container.querySelectorAll("TextField");

//     expect(inputs).toHaveLength(0);

// });


