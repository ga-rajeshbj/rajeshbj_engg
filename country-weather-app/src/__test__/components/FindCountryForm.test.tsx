import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import React from "react";
import { screen } from "@testing-library/react";
import { store } from "../../redux/store"
import FindCountryForm from "../../components/FindCountryForm";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/rootReducer";


let question = {
    id: 1,
    type: "mcq",
    question: "capital city of india",

    answerOptions: [
        { answerText: "Bangalore" },
        { answerText: "Hydrabad" },
        { answerText: "India" },
        { answerText: "Dehli" },
    ],
    ismultiselect: false,
    correctanswer: "Dehli",
    isAnswered: false,
    answer: "",
}



describe("Test UserForm component", () => {
    let container: HTMLDivElement;


    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
        jest.useFakeTimers();

        const handleSetAnswer = (ans: any, id: any) => {

            console.log(ans)

        };
        ReactDOM.render(
            <React.StrictMode>
                <BrowserRouter>
                    <Provider store={store}>
                        <FindCountryForm />
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
        const inputs = container.querySelectorAll("form");
        expect(inputs).toHaveLength(1);
    });

    it("Should render button component initialy", () => {
        const button = container.querySelectorAll("button");
        expect(button).toHaveLength(1);
    });
});