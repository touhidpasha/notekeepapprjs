// const API=require('../config//Backend.config')
const axios = require('axios');
const API = axios.create({
    baseURL: 'http://localhost:5000/',
    credentials: 'include'
})
class UserHelper {
    createUser = async (data) => {
        console.log("data-> " + data.firstName)
        try {
            const res = await API.post('user', data)
            console.log("post-acc creation succesfull" + res);
        } catch (err) { console.log(err) }
    }

    loginUser = async (data) => {
        console.log(data.email + " and " + data.password);
        try {
            const res = await API.post("user/login", data)
            localStorage.setItem("token", res.data.token);
            console.log("res from BE " + res.status);
            console.log(res);
            console.log("token from localStorage: " + localStorage.getItem("token"));
            // console.log("token from res: " + res);
            if (res.status === 200)
                return res.data.token;
            else
                return null;

        } catch (err) {
            console.log(err);
            return null;
        }
    }

    sendOTP = async (email) => {
        console.log(email);
        try {
            const res = await API.put('user/forgotPassword', { "email": email })
            console.log("in sendOTP" + res.status);
            if (res.status === 200){
                console.log("email sent successfully");
                return true;}
            else
                return false;
        } catch (err) {
            console.log(err)
            return false;
        }
    }

    verifyOTP = async (data) => {
        console.log("verify otp called in userhelper");
        try {
            const res = await API.post('user/verifyOTP', data)
            console.log(res);
            console.log("status code is " + res.status);
            console.log("status code is " + res.data.message);

            if (res.status === 200)
                return true;
            else
                return false;
        } catch (err) {
            console.log("error occured while verifying OTP");
            return false;
        }
    }

    changePassword = async (data) => {
        try {
            const res = await API.put("user/resetPassword", data)
            console.log(res);
            console.log("reset password succesfull");
        } catch (err) {
            console.log(err);
        }
    }
}
module.exports = new UserHelper();