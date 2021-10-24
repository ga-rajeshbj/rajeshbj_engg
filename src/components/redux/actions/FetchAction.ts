import axios from "axios";
import { Dispatch } from "redux";
import { ACTION } from "../Action";
import { hit, responseObj } from "../ActionTypes";

const loading = (): ACTION => ({
  type: "LOADING",
});

const successFetch = (listArray: hit[]): ACTION => ({
  type: "SUCCESS",
  payload: listArray,
});

const failFetch = (error: string): ACTION => ({
  type: "ERROR",
  payload: error,
});

export const fetchData = (hitNumber: number) => {
  return (dispatch: Dispatch<ACTION>) => {
    dispatch(loading());
    return axios
      .get<responseObj>(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${hitNumber}`
      )
      .then((response) => {
        dispatch(successFetch(response.data.hits));
      })
      .catch((error) => dispatch(failFetch(error)));
  };
};
