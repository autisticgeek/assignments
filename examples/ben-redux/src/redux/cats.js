const initialState = {
    data: []
}

const catReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_CAT":
            return {
                data: [...state.data, action.cat]
            }
        case "REMOVE_CAT":
            return {
                data: state.data.filter((cat, i) => i !== action.index)
            }
        case "EDIT_CAT":
            return {
                data: state.data.map((cat, i) => {
                    //console.log(action.cat)
                    if (i === action.cat.index) {
                        if (action.cat.imgURL !== cat.imgUrl) {
                            cat.imgUrl = action.cat.imgUrl;
                        }
                        if (action.cat.caption !== cat.caption) {
                            cat.caption = action.cat.caption;
                        }
                    }
                    return cat
                }
                )
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
export const removeCat = index => {
    return {
        type: "REMOVE_CAT",
        index
    }
}
export const editCat = (cat) => {
    return {
        type: "EDIT_CAT",
        cat
    }
}

export default catReducer;


