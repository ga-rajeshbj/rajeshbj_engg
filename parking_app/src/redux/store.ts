import { rootReducer, RootState } from "./rootReducer";
import { createStore, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { ACTION } from "./types/ActionTypes";

export const store = createStore<RootState, ACTION, {}, {}>(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<RootState, ACTION>)
);
