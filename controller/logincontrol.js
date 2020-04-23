const express=require('express');

const dbs=require('../database/db');

const path=require('path');

//callback for login using post method
exports.getlogin=async(req,res,next) => {

    const user=req.body.user;
    const pass=req.body.pass;
    
   const [mail]=await dbs.execute('select * from users where email=? And password=?',[user,pass]);
   if(mail.length>0)
   {
    const email=mail[0].email;
    const loin_name=mail[0].username;
        if((user===email))
        {
            console.log('login successful');
            console.log(email);
            return res.send(`<h3>Welcome ${loin_name} !!!</h3>`);
        }
   }
   else{
       res.send('<h3>Invalid Username or password</h3><a href="register.html">Register to continue with us</a><br><br><a href="forgot_pass.html">Click here to check password</a>');
   }
    
};