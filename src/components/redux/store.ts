import { applyMiddleware, createStore } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { ACTION } from "./Action";
import { AppState, rootReducer } from "./rootReducer";

// export const store = createStore(rootReducer, applyMiddleware(thunk));
export const store = createStore<AppState, ACTION, {}, {}>(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, ACTION>)
);
