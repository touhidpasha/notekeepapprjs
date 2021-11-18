import { combineReducers } from "redux";

const initialState = {"data":[]};

const notesReducers = (state = initialState, action) => {
    switch (action.type) {
        case "set":
            return {...state,"data":action.payload}
        case "get":
            return state;
        default:
            return state
    }
}

// export default reducer;
const reducers = combineReducers({
    note:notesReducers
})

export default reducers