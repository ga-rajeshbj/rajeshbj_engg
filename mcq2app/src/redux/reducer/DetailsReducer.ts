import { DetailsAction } from "../types/DetailsAction";

interface State {
  name: string;
  gender: string;
  language: string;
}

const initialState: State = {
  name: "",
  gender: "",
  language: "",
};

const detailsReducer = (state = initialState, action: DetailsAction) => {
  switch (action.type) {
    case "NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "GENDER":
      return {
        ...state,
        gender: action.payload,
      };
    case "LANGUAGE":
      return {
        ...state,
        language: action.payload,
      };

    default:
      return state;
  }
};

export { detailsReducer };
