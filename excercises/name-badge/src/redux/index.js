import { createStore } from "redux";

const initialState = {
    data: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BADGE":
        return {
            data: [...state.data, action.badge]
        }
        default:
            return state;
    }
}

export const addBadge = badge => {
    return {
        type: "ADD_BADGE",
        badge
    }
}

const store = createStore(reducer);
store.subscribe(() => {
    console.log(store.getState());
})

export default store;