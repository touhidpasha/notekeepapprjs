const axios = require('axios');
const API = axios.create({
    baseURL: 'http://localhost:5000/',
    // credentials: 'include'
})
class NoteHelper {
    saveNotes = async (info) => {
        const res = await API.post("note", info);
    }

    moveToTrash = async (info) => {
        const res = await API.put("note/trash", info);
    }

    deleteNote = async (info) => {
        const res = await API.put("note", info);
    }

    updateNote = async (info) => {
        const res = await API.put("note/update", info);
    }
    updateColor = async (info) => {
        const res = await API.post("note/updateColor", info);
    }

    getAllNotes = async (info) => {
        const res = await API.post("note/getnotes", {
            headers: {
                'Authorization': info.token
            }
        })
        return res;
    }
    uploadImage = async (data) => {
        const res = await API.post("note/uploadImage", data, { headers: { 'Content-Type': 'multipart/form-data' } })
        return res;

    }
}
module.exports = new NoteHelper();