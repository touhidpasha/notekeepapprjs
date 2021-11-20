const axios = require('axios');
const API = axios.create({
    baseURL: 'http://localhost:5000/',
    // credentials: 'include'
})
class NoteHelper {


    saveNotes = async (info) => {
        const res = await API.post("note", info);
        console.log(res);
    }
    // getUserDetails= async (data) => {
    //     const res=await API.get('user/getUserDetails',data)
    //     console.log(res);
    // }


    moveToTrash=async (info)=>{
        const res=await API.put("note/trash",info);
        console.log(res);
    }

    getAllNotes = async (info) => {
        console.log("get all notes called in notehelper " + info.token);


        // const res= await axios({
        //     method: 'get',
        //     url: 'http://localhost:5000/note',
        //     body:{
        //         "token":info.token
        //     }
        //     // headers: info.token
        //     // headers: {
        //     //     Authorization: info.token,
        //     //   },
        //   });

        // const res = await API.get("note/getnotes", info)
        // const res = await API.get("note/getnotes",{
        //     data: {
        //         token: info.token
        //     }
        // })


        // const res = await API.post("note/getnotes", info)
        const res = await API.post("note/getnotes", {
            headers: {
                'Authorization': info.token
            }
        })

        console.log("res in note helper" + res);
        return res;
    }

}
module.exports = new NoteHelper();