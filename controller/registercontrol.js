const express=require('express');

const dbs=require('../database/db');

const path=require('path');

//callback for register using post method
exports.getregister=async(req,res,next) => {
    if(req.body.pass===req.body.conpass)
    {
        const m1=req.body.name;
        const m2=req.body.uname;
        const m3=req.body.pass
        const [check]=await dbs.execute('select * from users where username=? AND email=? And password=?',[m1,m2,m3]);
        if(check.length==0)
        {
            await dbs.execute('insert into users (username,email,password) values(?,?,?)',[m1,m2,m3]);
            res.redirect('/login.html');
            console.log("Registeration successful");
        }
        else{
            res.sendFile(path.join(__dirname,'../',"public",'exist.html'));
        }
       
    }
    else{
        console.log("password and confirm password does not match");
        res.redirect('/register.html');
    }
};
