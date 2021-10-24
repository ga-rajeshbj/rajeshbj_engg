import { ACTION } from "../Action";
import { State } from "../ActionTypes";

const intialState: State = {
  loading: false,
  data: [],
  error: "",
};

export const fechingReducer = (state = intialState, action: ACTION): State => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: [...state.data, ...action.payload],
        error: "",
      };

    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
