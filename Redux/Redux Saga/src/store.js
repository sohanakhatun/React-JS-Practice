import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { usersReducer } from "./reducers/usersReducer";
import { watchFetchUsers } from "./sagas/usersSaga";
import { logger } from "./middleware/logger";

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  users: usersReducer,
});

// Apply middleware: logger + saga
export const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));

// Run saga
sagaMiddleware.run(watchFetchUsers);