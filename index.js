const express = require('express');
const routes = require('./routes');
const path = require('path');
var bodyParser = require('body-parser');


const app = express();




var loginController=require('./controllers/loginController');
var registerController=require('./controllers/registerController');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
/* route to handle login and registration */
app.post('/signup',registerController.register);
app.post('/login',loginController.authenticate);



app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.use(routes);


app.listen(3000, () => console.log('server started'));