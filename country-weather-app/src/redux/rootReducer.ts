import { combineReducers } from "redux";
import { reducer } from "./reducers/Reducer";

export const rootReducer = combineReducers({ reducer });
export type RootState = ReturnType<typeof rootReducer>;
