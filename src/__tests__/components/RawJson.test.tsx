import * as React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import App from "../../App";
import RawJson from "../../components/Table/RawJson"
it("renders location state", () => {
    const history = createMemoryHistory();
    const state = {
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
    history.push(`/rawjson/${state.author}/${state.title}`, state);

    const { getByText, getByTestId } = render(
        <Router history={history}>
            <RawJson />
        </Router>
    );

    getByText(`${JSON.stringify(state)}`);
    expect(getByTestId("data-id")).toBeTruthy()

});