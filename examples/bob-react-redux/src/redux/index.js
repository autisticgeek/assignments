import {createStore} from "redux";
const initState = 0;
const reducer= (state = initState, action) => {
    switch(action){
        case"SOME_CASE" :
            //logic
            break;
        default:
        return state;
    }
}

const store= createStore(reducer);

export default store;