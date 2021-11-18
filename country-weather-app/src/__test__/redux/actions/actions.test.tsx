import { addData, loading } from "../../../redux/actions/actions"
import "@testing-library/jest-dom"
import { Dispatch } from "redux";
import { ACTION } from "../../../redux/types/Action";

test("add the name ", () => {
  const action = loading();
  expect(action).toEqual(

    {
      type: "LOADING",
    })

});