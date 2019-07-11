import { createStore, combineReducers } from "redux";

import notesReducer from "./notes";

const store = createStore(
  combineReducers({ notesReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
