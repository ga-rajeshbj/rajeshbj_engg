import { Dispatch } from "redux";

import { DetailsAction } from "../types/DetailsAction";

const addName = (name: string) => {
  return (dispatch: Dispatch<DetailsAction>) => {
    dispatch({
      type: "NAME",
      payload: name,
    });
  };
};

const setGender = (gender: string) => {
  return (dispatch: Dispatch<DetailsAction>) => {
    dispatch({
      type: "GENDER",
      payload: gender,
    });
  };
};

const setLanguage = (language: string) => {
  return (dispatch: Dispatch<DetailsAction>) => {
    dispatch({
      type: "LANGUAGE",
      payload: language,
    });
  };
};

const setAnswerWithID = (obj: any) => {
  console.log("action obj", obj);
  return (dispatch: Dispatch<DetailsAction>) => {
    dispatch({
      type: "ADD_ANSWER_WITH_ID",
      payload: obj,
    });
  };
};

export { addName, setGender, setLanguage, setAnswerWithID };
