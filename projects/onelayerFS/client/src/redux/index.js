import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from 'axios';

const reducer = (state = {}, action) => {
    console.log("action", action)
    switch (action.type) {
        case "GET_BOOKS":
            return {
                ...state,
                books: action.data
            };
        case "EDIT_BOOKS":
            return state.books.map(obj => {
                if (obj._id === action.data._id) return action.data
                return obj
            })
        default:
            return state;
    }
}
export const getBooks = () => {
    return dispatch => {
        axios.get(`/books`)
            .then(response => {
                dispatch({
                    type: "GET_BOOKS",
                    data: response.data
                })
            })
    }
}
export const newBookFunction = (book) => {
    return dispatch => {
        axios.post(`/books`, book)
            .then(response => {
                dispatch({
                    type: "NEW_BOOKS",
                    data: response.data
                })
            })
    }
}
export const editBookFunction = (book) => {
    return dispatch => {
        console.log("me to")
        axios.put(`/books/${book._id}`, book)
            .then(response => {
                console.log(response.data);
                dispatch({
                    type: "EDIT_BOOKS",
                    data: response.data
                })
            })
    }
}
export const deleteBook = id => {
    return dispatch => {
        axios.delete(`/books/${id}`)
            .then(response => {
                dispatch({
                    type: "DELETE_BOOK",
                    data: response.data
                })
            }

            )
    }
}



const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log("STORE", store.getState()));

export default store;