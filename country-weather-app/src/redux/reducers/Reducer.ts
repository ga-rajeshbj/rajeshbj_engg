import { Data } from "../../components/types/Types";
import { ACTION } from "../types/Action";

interface State {
  data: Data[];
  loading: boolean;
}

const intialState: State = {
  data: [],
  loading: false,
};

export const reducer = (state = intialState, action: ACTION): State => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "ADD_DATA":
      return {
        data: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
