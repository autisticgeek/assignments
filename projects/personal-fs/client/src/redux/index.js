import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from 'axios';

const reducer = (state = { data: [], comments: [] }, action) => {
    console.log("action", action)
    switch (action.type) {
        case "FETCH_ARTICLES":
            return {
                ...state,
                data: action.data
            };
              default:
            return state;
    }
}



const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log("STORE", store.getState()));

export default store;