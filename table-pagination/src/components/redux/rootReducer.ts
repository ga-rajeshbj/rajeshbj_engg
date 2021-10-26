import { combineReducers } from "redux";
import { fechingReducer } from "./reducer/reducer";

export const rootReducer = combineReducers({ fechingReducer });

export type AppState = ReturnType<typeof rootReducer>;
