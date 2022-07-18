import { combineReducers } from "redux";
import { ACTION } from "./types/ActionTypes";
import { carDetailsReducer } from "./reducers/cardetails";

export const rootReducer = combineReducers({ carDetailsReducer });
export type RootState = ReturnType<typeof rootReducer>;
