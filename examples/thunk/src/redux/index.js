import { createStore, combineReducers } from "redux";
const initState= {
    planets:[],
    errMsg:'',
    loading:true
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_PLANETS":
        return {loading:false}
        default:
            return state;
    }
}

const getPlanets= ()=>{
    return {type:"GET_PLANETS"
}

const store = createStore(combineReducers(reducer));
store.subscribe(() => {
    console.log(store.getState());
})}

export default store;
