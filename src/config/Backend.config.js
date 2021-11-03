import axios from 'axios';

export default {
    API : axios.create({
        baseURL: 'http://localhost:5000/',
        // credentials:'include'
    })
}

