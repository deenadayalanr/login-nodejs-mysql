const express=require('express');

const dbs=require('../database/db');

//callback for reset password using post method
exports.getresetpass=async(req,res,next) => {
    const reset_mail=req.body.user;
    const reset_pass=req.body.pass;
    const new_pass=req.body.newpass;
    try{
        const [check_reset]=await dbs.execute('select email,password from users where email=? And password=?',[reset_mail,reset_pass]);
        const na=check_reset[0].email;
        const va=check_reset[0].password;
        console.log(na,va);
        await dbs.execute('update users set password=? where email=?',[new_pass,na]);
        res.send(`<h2>Your new password for account ${na} has been updated successfully</h2><a href="login.html">Back to Login page</a>`);
    }
    catch(err) {
        res.send('<h1>User not exists try registering with us or try checking the password</h1><br><h2><a href="login.html">Back to Login page</a></h2><br><h2><a href="forgot_pass.html">Click here to check password</a></h2>');
    }
   
};