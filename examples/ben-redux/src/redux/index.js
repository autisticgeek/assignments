import { createStore, combineReducers } from "redux";

import cats from "./cats";

const store = createStore(combineReducers({ cats }));
store.subscribe(() => {
    console.log(store.getState());
})

export default store;

