const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv').load();

const openRoutes = require('./routes/open-routes');

const models = require('./models');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(openRoutes);


models.sequelize.sync().then(() => {
    app.listen(5000);
}).catch(err => console.log(err));

