import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { usersReducer } from "./reducers/usersReducer";

const rootReducer = combineReducers({
  users: usersReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
