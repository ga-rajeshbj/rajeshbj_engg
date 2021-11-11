import { DetailsAction } from "../types/DetailsAction";

interface State {
  answerArray: any[];
}

const initialState: State = {
  answerArray: [],
};

const answerReducer = (state = initialState, action: DetailsAction) => {
  switch (action.type) {
    case "ADD_ANSWER_WITH_ID":
      console.log("reducer action", action.payload);

      if (state.answerArray.length === 0) {
        return {
          ...state,
          answerArray: [...state.answerArray, action.payload],
        };
      } else {
        return {
          ...state,
          answerArray: state.answerArray.map((answer) => {
            console.log("map condition", action.payload);

            if (answer.id === action.payload.id) {
              console.log("true condition", action.payload);
              return {
                ...action.payload,
              };
            } else {
              console.log("false condition", action.payload);
              return { ...action.payload };
            }
          }),
        };
      }

    default:
      return state;
  }
};

export { answerReducer };
