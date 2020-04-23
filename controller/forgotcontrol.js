const express=require('express');

const dbs=require('../database/db');

//callback for forgot password using post method
exports.getforgot=async(req,res,next) => {
    const forgot_mail=req.body.user;
    try{
        const [check_forgot]=await dbs.execute('select email,password from users where email=?',[forgot_mail]);
        console.log(check_forgot[0].password);
        const val=check_forgot[0].password;
        const nam=check_forgot[0].email;
        res.send(`<h2>Email Id: ${nam} <br> password: ${val}<h2><a href="login.html">Back to Login page</a>`);
    }
    catch(err) {
        res.send('<h1>User not exists try registering with us</h1><h2><a href="login.html">Back to Login page</a></h2>');
    }
    
};
