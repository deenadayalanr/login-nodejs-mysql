const path=require('path');

const bodyparser=require('body-parser');

const express=require('express');

const usrroute=require('./server/route');

const app=express();

app.use(express.static('public'));

app.use(express.static('server'));

app.use(express.static('files'));

app.use(bodyparser.urlencoded({extended:false}));

app.use(express.json());

app.use(usrroute);

app.use((req,res,next) => {
        res.status(404).sendFile(path.join(__dirname,'public',"404.html"));
});

app.listen(8000);