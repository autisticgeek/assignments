const initialState = {
    data: []
}

const catReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CAT":
            return {
                data: [...state.data, action.cat]
            }
        default:
            return state;
    }
}

export const addCat = cat => {
    return {
        type: "ADD_CAT",
        cat
    }
}

export default catReducer;


