import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from 'axios';

const reducer = (state = { data: [], comments:[] }, action) => {
    console.log("action", action)
    switch (action.type) {
        case "FETCH_ARTICLES":
            return { data: action.data };
        default:
            return state;
    }
}
export const fetchArticles = () => {
    return dispatch => {
        axios.get('/post')
            .then(response => {
                dispatch({
                    type: "FETCH_ARTICLES",
                    data: response.data
                })
            })
    }
}


const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log("store", store.getState()));

export default store;