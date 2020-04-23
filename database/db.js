const mysql=require('mysql2/promise');

const data=mysql.createPool({
    host:'', //Your Host name
    user:'root', //If user is not root mention your user name.  
    password:'', //Password for root user
    database:''  // Schema name as created in mysql.
  });

module.exports=data;
