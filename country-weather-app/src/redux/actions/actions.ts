import { Dispatch } from "redux";
import { Data } from "../../components/types/Types";
import { ACTION } from "../types/Action";

export const addData = (object: Data[]) => {
  return (dispatch: Dispatch<ACTION>) => {
    dispatch({
      type: "ADD_DATA",
      payload: object,
    });
  };
};

export const loading = () => ({
  type: "LOADING",
});
