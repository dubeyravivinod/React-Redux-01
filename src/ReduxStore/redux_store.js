import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import Reducer from "./Reducer";

const myStore = legacy_createStore(Reducer, applyMiddleware(logger));

export default myStore;
