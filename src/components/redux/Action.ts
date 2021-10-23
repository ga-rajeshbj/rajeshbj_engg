import { responseObj, User, hit } from "./ActionTypes";

interface loading {
  type: "LOADING";
}

interface success {
  type: "SUCCESS";
  payload: hit[];
}

interface error {
  type: "ERROR";
  payload: string;
}

export type ACTION = loading | success | error;
