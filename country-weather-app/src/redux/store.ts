import { createStore } from "redux";

import { rootReducer } from "./rootReducer";

// create the store
export const store = createStore(rootReducer);
