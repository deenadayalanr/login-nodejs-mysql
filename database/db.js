const mysql=require('mysql2/promise');

const data=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'', //Password for root user
    database:''  // Schema name as created in mysql.
  });

module.exports=data;
