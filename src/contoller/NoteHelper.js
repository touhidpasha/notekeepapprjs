const axios = require('axios');
const API = axios.create({
    baseURL: 'http://localhost:5000/',
    // credentials: 'include'
})
class NoteHelper {
    saveNotes = async (info) => {
        const res = await API.post("note", info);
        // console.log(res);
    }
 
    moveToTrash = async (info) => {
        const res = await API.put("note/trash", info);
        // console.log(res);
    }

    deleteNote = async (info) => {
        const res = await API.put("note", info);
        // console.log(res);
    }

    updateNote = async (info)=>{
        const res = await API.put("note/update", info);
        // console.log(res);
    }
    updateColor = async (info)=>{
        // console.log("notehelper called for color update");
        const res = await API.post("note/updateColor", info);
        // console.log(res);
        // return res;
    }

    getAllNotes = async (info) => {
        // console.log("get all notes called in notehelper " + info.token);
        // const res = await API.post("note/getnotes", info)
        const res = await API.post("note/getnotes", {
            headers: {
                'Authorization': info.token
            }
        })
        // console.log("res in note helper" + res);
        return res;
    }
    uploadImage=async (data)=>{
        console.log("in uploadImage note helper");
        const res = await API.post("note/uploadImage",data, { headers: {'Content-Type': 'multipart/form-data'}})
        console.log(res);
        return res;

    }
    getImage=async (data)=>{
        // console.log("in uploadImage note helper");
        const res = await API.post("note/getImage",data)
        console.log("getimage notehelper "+res);
        return res;

    }
}
module.exports = new NoteHelper();