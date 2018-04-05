import { createStore } from "redux";
//const initState = { counter: 0 }
const reducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + action.amount;
        case "DECREMENT":
            return state - 1;
        case "DEVIDE":
            return Math.floor(state / 2);
        default:
            return state;
    }
}
export const increment = (num) => {
    return {
        type: "INCREMENT",
        amount:num
    }
}
export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}
export const devide = () => {
    return {
        type: "DEVIDE"
    }
}

const store = createStore(reducer);

export default store;