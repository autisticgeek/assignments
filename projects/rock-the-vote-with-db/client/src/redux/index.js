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
        case "VOTE":
            return{
                ...state,
                data: state.data.map(obj=>{
                    if(action.data._id===obj._id){
                        return action.data;
                    }
                    return obj;
                })
            }
            
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
export const downvoteArticle = (articleID) => {
    return dispatch => {
        axios.get(`/downvote/${articleID}`)
        .then(response => {
            dispatch({
                type: "VOTE",
                data: response.data
            })
        })
    }
}
export const upvoteArticle = (articleID) => {
    return dispatch => {
        axios.get(`/upvote/${articleID}`)
        .then(response => {
            dispatch({
                type: "VOTE",
                data: response.data
            })
        })
    }
}
export const newArticlePost = (obj) => {
    console.log("redux", obj);
    
    return dispatch => {
        axios.post(`/post`, obj)
        .then(response => {
            console.log("test",response.data)
         
        })
    }
}


const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log("store", store.getState()));

export default store;