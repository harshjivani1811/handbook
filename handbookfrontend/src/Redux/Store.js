import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import rootReducer from "./Reducer/index";
import thunkMiddleware from "redux-thunk";

const newReducer = combineReducers({
  rootReducer: rootReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  newReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
