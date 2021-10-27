import axios from "axios";
import { Dispatch } from "redux";
import { ACTION } from "../Action";
import { hit, responseObj } from "../ActionTypes";
import moment from "moment";
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

const utcConverter = (date: string): string => {
  let local = moment.utc(date).local().format("YYYY-MMM-DD h:mm A");
  return local.toString();
};

export const fetchData = (hitNumber: number) => {
  return (dispatch: Dispatch<ACTION>) => {
    dispatch(loading());
    return axios
      .get<responseObj>(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${hitNumber}`
      )
      .then(async (response) => {
        //  dispatch(successFetch(response.data.hits));

        let newData = await response.data.hits.map((data: any) => {
          return {
            ...data,
            created_at: utcConverter(data.created_at),
          };
        });
        dispatch(successFetch(newData));

        console.log(response.data.hits);
      })
      .catch((error) => dispatch(failFetch(error)));
  };
};
