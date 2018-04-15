import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import frontrunnerReducer from "./frontrunnerReducer";
const store = createStore(combineReducers({ frontrunner: frontrunnerReducer }), applyMiddleware(thunk));
store.subscribe(() => console.log("store",store.getState()));

export default store;
