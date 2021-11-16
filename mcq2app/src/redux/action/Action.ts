import { Dispatch } from "redux";

import { DetailsAction } from "../types/DetailsAction";

const addName = (name: string) => ({
  type: "NAME",
  payload: name,
});

const setGender = (gender: string) => ({
  type: "GENDER",
  payload: gender,
});

const setLanguage = (language: string) => ({
  type: "LANGUAGE",
  payload: language,
});

const setLanguagePreference = (language: string) => ({
  type: "SET_LANGUAGE_PREFERENCE",
  payload: language,
});

const setAnswerWithID = (obj: any) => ({
  type: "ADD_ANSWER_WITH_ID",
  payload: obj,
});

export {
  addName,
  setGender,
  setLanguage,
  setAnswerWithID,
  setLanguagePreference,
};
