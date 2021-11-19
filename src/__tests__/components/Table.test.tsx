import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import React from "react";
import { screen } from "@testing-library/react";
import { store } from "../../components/redux/store"
import MainTable from "../../components/Table/Table";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../components/redux/rootReducer";
import { act } from "react-dom/test-utils";

const columns: any[] = [
    {
        Header: "Title",
        accessor: "title",
        width: "900px",
        className: "w-25",
        widthStyle: {
            width: "200px",
        },
    },
    {
        Header: "URL",
        accessor: "url",

        width: "60px",
    },
    {
        Header: "Created At",
        accessor: "created_at",
    },
    {
        Header: "Author",
        accessor: "author",
    },
]


let data = [
    {
        author: "string",
        comment_text: null,
        created_at: "string",
        created_at_i: 1234,
        num_comments: 33,
        objectID: "string",
        parent_id: null,
        points: 23,
        story_id: null,
        story_text: null,
        story_title: null,
        story_url: null,
        title: "string",
        url: "string",
        _highlightResult: "any",
        _tags: "any"
    }
]




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
                        <MainTable column={columns} rows={data} />
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
        expect(inputs).toHaveLength(0);
    });

    it("should render with button", () => {

        act(() => {
            const button = container.querySelectorAll("button");
            expect(button).toHaveLength(4);
        })
    })
});