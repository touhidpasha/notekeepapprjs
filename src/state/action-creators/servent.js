
// class actionCreators {
export const setNotes = (notes) => {
    return (dispatch) => {
        dispatch({
            type: "set",
            payload: notes
        });
    }
}


export const getNotes = (notes) => {
    // console.log(amount, "Lol")
    return (dispatch) => {
        dispatch({
            type: "get",
            payload: notes
        });
    }
}
// }
// module.exports = new actionCreators();