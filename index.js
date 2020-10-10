const express = require('express');
const auth = require('./auth');
const path = require('path');
const app = express();


app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.use(auth);


app.listen(3000, () => console.log('server started'));