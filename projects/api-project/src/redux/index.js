import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import frontrunnerReducer from "./frontrunnerReducer";
import blueReducer from "./blueReducer";
import redReducer from "./redReducer";
import greenReducer from "./greenReducer";
const store = createStore(combineReducers({ frontrunner: frontrunnerReducer, blue: blueReducer, green: greenReducer, red:redReducer}), applyMiddleware(thunk));
store.subscribe(() => console.log("store",store.getState()));

export default store;
