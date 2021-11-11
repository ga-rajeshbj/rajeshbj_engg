import { combineReducers } from "redux";
import { detailsReducer } from "./reducer/DetailsReducer";
import { answerReducer } from "./reducer/AnswerReducer";

export const rootReducer = combineReducers({
  detailsReducer,
  answerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
