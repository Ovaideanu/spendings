const User = require('../models').user;
const bcrypt = require('bcryptjs');

exports.index = (req, res, next) => {
    res.render('homePage');
};

exports.loginView = (req, res, next) => {
    res.render('login');
};

exports.login = (req, res, next) => {
    const password = req.body.password;
    const email = req.body.email;

    User.findOne({
        where: { email: email }
    })
    .then(user => {
        const userId = user.id;
        bcrypt
            .compare(password, user.password)
            .then(doMatch => {
                if (doMatch) {
                    req.session.loggedIn = true;
                    req.session.userId = userId;
                    res.redirect('/spending');
                } else {
                    res.redirect('/login');
                }
            })
    })
    .catch(err => {
        console.log(err);
        console.log(err.original);
    });
};

exports.registerView = (req, res, next) => {
    res.render('register');
};

exports.registerUser = (req, res, next) => {
    const password = req.body.password;
    const email = req.body.email;

    bcrypt.hash(password, 12)
        .then(hashPassword => {
            return User.create({
                email: email,
                password: hashPassword
            });
        })
        .then(user => {
            res.redirect('/login');
        })
        .catch(err => {
            res.render('register', {
                error: true,
                message: err.original.sqlMessage
            })
        });
};

exports.logoutUser = (req, res, next) => {
    req.session.loggedIn = false;
    res.redirect('/')
};