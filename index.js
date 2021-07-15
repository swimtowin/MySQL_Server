const mysql = require('mysql');
const express = require('express');
var app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
//連結資料庫
var mysqlConnection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database:'image'
});

mysqlConnection.connect((err) =>{
    if (!err)
        console.log('DB connect succeded.');
    else
        console.log('DB connection FAIL');

});

app.listen(3000,()=> console.log('Express run in port3000'));

app.get('/image', (res,req)=>{
    mysqlConnection.query('SELECT * FROM images', (err, rows, fields) => {
        if(!err)
        console.log(rows);
        else
        console.log(err);
    })


});

