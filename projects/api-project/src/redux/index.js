import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import frontrunnerReducer from "./frontrunnerReducer";
import blueReducer from "./blueReducer";
import redReducer from "./redReducer";
import greenReducer from "./greenReducer";

const globalstate = {
    frontrunner: frontrunnerReducer,
    blue: blueReducer,
    green: greenReducer,
    red:redReducer
}

const store = createStore(combineReducers(globalstate), applyMiddleware(thunk));
store.subscribe(() => console.log("store",store.getState()));

export default store;
