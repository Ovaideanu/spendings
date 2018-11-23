const path = require('path');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const csrf = require('csurf');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

const csrfProtection = csrf({});

app.use(session({
    secret: 'dadads57897ujncalklmb3213cxvzczxc313vb',
    resave: false,
    saveUninitialized: false
}));
app.use(csrfProtection);

app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn;
    res.locals.csrfToken = req.csrfToken();
    next()
});

const openRoutes = require('./routes/open-routes');
app.use(openRoutes);

const models = require('./models');

models.sequelize.sync().then(() => {
    app.listen(5000);
}).catch(err => console.log(err));

