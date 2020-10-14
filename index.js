const express = require('express');
const routes = require('./routes');
const path = require('path');
const mysql = require('mysql');

var pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
});

pool.query('select * from register', function(err, result, fields){
    if(err){
        console.log('error');
    }else{
        console.log('connected db');
        console.log(result);
    }

});


const app = express();



app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.use(routes);


app.listen(3000, () => console.log('server started'));