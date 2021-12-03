import { combineReducers } from "redux";

const initialState = { "data": [] };

const notesReducers = (state = initialState, action) => {
    switch (action.type) {
        case "setNotes":
            var searchString = action.searchString
            if (searchString == "")
            return { ...state, "data": [...action.payload].filter(note=>{ return (!note.trash)}) }
        else {
            return { ...state, "data": [...action.payload].filter(note => { return ((note.title.includes(searchString) || note.content.includes(searchString)) && !note.trash) }) }

        }
        case "getNotes":
            return state;
        default:
            return state
    }
}

const trashNotesReducers = (state = initialState, action) => {
    switch (action.type) {
        case "setTrashNotes":
            var searchString = action.searchString
            if (searchString == "")
            return { ...state, "data": [...action.payload].filter(note=>{ return (note.trash)}) }
        else {
            return { ...state, "data": [...action.payload].filter(note => { return ((note.title.includes(searchString) || note.content.includes(searchString)) && note.trash) }) }

        }
        
        default:
            return state
    }
}

// export default reducer;
const reducers = combineReducers({
    note: notesReducers,
    trashNote:trashNotesReducers
})

export default reducers