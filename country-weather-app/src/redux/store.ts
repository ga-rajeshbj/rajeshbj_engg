import { applyMiddleware, createStore } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { rootReducer, RootState } from "./rootReducer";
import { ACTION } from "./types/Action";
// create the store

// export const store = createStore(rootReducer, applyMiddleware(thunk));
export const store = createStore<RootState, ACTION, {}, {}>(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<RootState, ACTION>)
);
