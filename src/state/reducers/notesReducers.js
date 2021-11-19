import { combineReducers } from "redux";

const initialState = { "data": [] };

const notesReducers = (state = initialState, action) => {
    switch (action.type) {
        case "setNotes":
            var searchString = action.searchString
            if (searchString == "")
            return { ...state, "data": action.payload }
        else {
            console.log("search is happening");
            return { ...state, "data": [...action.payload].filter(note => { return (note.title.includes(searchString) || note.content.includes(searchString)) }) }

        }
        case "getNotes":
            return state;
        // case "getFilteredNotes":
        //     console.log("search is happening");
        //     return { ...state, "data": [...action.payload].filter(note => { return (note.title.toLowerCase().includes(searchString.toLowerCase()) || note.content.toLowerCase().includes(searchString.toLowerCase())) }) }

        // var notes = [action.payload]
        // console.log("in getfilteredNotes " + notes);
        // return state
        default:
            return state
    }
}


// const filteredNotesReducers = (state = initialState, action) => {
//     switch (action.type) {
//         case "setFilteredNotes":
//             var searchString = action.searchString
//             console.log("search is happening");
//             return { ...state, "data": [...action.payload].filter(note => { return (note.title.includes(searchString) || note.content.includes(searchString)) }) }


//     }
// }

// const searchStringReducers= (state = "", action) => {
//     switch(action.type) {
//         case 'setSearchString':
//             return action.payload
//     }
// }

// const headerReducer = (state, action) =>{ 
// return(action.payload)
// }

// export default reducer;
const reducers = combineReducers({
    note: notesReducers,
    // filteredNotes: filteredNotesReducers,
    // searchString:searchStringReducers,
    // headerName:headerReducer
})

export default reducers