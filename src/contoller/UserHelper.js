// const Backend=require('../config//Backend.config')
const axios = require('axios');
const API = axios.create({
    baseURL: 'http://localhost:5000/',
    // credentials:'include'
})
class UserHelper {
    createUser = async (data) => {
        console.log("data-> " + data.firstName)
        try {
            const res = await API.post('user', data)
            console.log("post-acc creation succesfull" + res);
        } catch (err) { console.log(err) }
    }

    loginUser = (data) => {
        console.log(data.email + " and " + data.password);
        try {
            const res = API.post("user/login", data)
            localStorage.setItem("token", res)
            console.log(res);
            console.log("token from localStorage: " + localStorage.getItem("token"));
            console.log("token from res: " + res);


        } catch (err) {
            console.log(err);
        }
    }

    sendOTP = (email) => {
        console.log(email);
        try {
            const res = API.put('user/forgotPassword', { "email": email })
            console.log(res);
            return true;
        } catch (err) {
            console.log(err)
            return false;
        }
    }

    verifyOTP = (data) => {
        console.log("verify otp called in userhelper");
        try {
            const res = API.post('user/verifyOTP', data)
            console.log("status code is "+res.status);
            // if (JSON().stringify(res) === "correct OTP")
            return true;
            // else
            // return false;
        } catch (err) {
            console.log("error occured while verifying OTP");
            return false;
        }
    }

    changePassword = (data) => {
        try {
            const res = API.put("user/resetPassword", data)
            console.log(res);
            console.log("reset password succesfull");
        } catch (err) {
            console.log(err);
        }
    }
}
module.exports = new UserHelper();