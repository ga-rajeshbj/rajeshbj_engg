import { DetailsAction } from "../types/DetailsAction";
import { defaultObj } from "../../containers/defaultJson";
interface State {
  answerArray: any[];
}

const initialState: State = {
  answerArray: [],
};

const answerReducer = (state = initialState, action: DetailsAction) => {
  switch (action.type) {
    case "SET_LANGUAGE_PREFERENCE":
      return {
        ...state,
        answerArray: defaultObj[action.payload],
      };
    case "ADD_ANSWER_WITH_ID":
      if (state.answerArray.length === 0) {
        console.log("entering true ");
        return {
          ...state,
          answerArray: [...state.answerArray, action.payload],
        };
      } else {
        console.log("entering false ");
        return {
          ...state,
          answerArray: state.answerArray.map((answer) => {
            if (answer.id === action.payload.id) {
              return {
                ...answer,
                answer: action.payload.ans,
                isAnswered: true,
              };
            } else {
              return answer;
            }
          }),
        };
      }

    default:
      return state;
  }
};

export { answerReducer };

// case "ADD_ANSWER_WITH_ID":
//       if (state.answerArray.length === 0) {
//         return {
//           ...state,
//           answerArray: [...state.answerArray, action.payload],
//         };
//       } else {
//         return {
//           ...state,
//           answerArray: state.answerArray.map((answer) => {
//             if (answer.id === action.payload.id) {
//               return {
//                 ...answer,
//                 answer: action.payload.ans,
//                 isAnswered: true,
//               };
//             } else {
//               return answer;
//             }
//           }),
//         };
//       }
