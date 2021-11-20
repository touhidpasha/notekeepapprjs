
// class actionCreators {
export const setNotes = (notes,searchString) => {
    return (dispatch) => {
        dispatch({
            type: "setNotes",
            payload: notes,
            searchString:searchString
        });
    }
}

export const setTrashNotes = (notes,searchString) => {
    return (dispatch) => {
        dispatch({
            type: "setTrashNotes",
            payload: notes,
            searchString:searchString
        });
    }
}


export const getNotes = (notes) => {
    // console.log(amount, "Lol")
    return (dispatch) => {
        dispatch({
            type: "getNotes",
            payload: notes
        });
    }


}

export const setFilteredNotes = (notes,searchString) => {
    return (dispatch) => {
        dispatch({
            type: "setFilteredNotes",
            payload: notes,
            searchString:searchString
        })
    }
}
export const setSearchString = (string)=>{
    return (dispatch) => {
        dispatch({
            type: "setSearchString",
            payload: string
        })
    }
}

// }
// module.exports = new actionCreators();