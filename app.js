const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const freeRoutes = require('./routes/free');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(freeRoutes);




app.listen(5000);