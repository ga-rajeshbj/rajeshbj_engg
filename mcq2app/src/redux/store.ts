import { createStore, applyMiddleware } from "redux";
import { rootReducer, RootState } from "./rootReducer";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { DetailsAction } from "./types/DetailsAction";
export const store = createStore<RootState, DetailsAction, {}, {}>(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<RootState, DetailsAction>)
);
