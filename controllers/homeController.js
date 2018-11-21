const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.index = (req, res, next) => {
    res.render('homePage');
};

exports.register = (req, res, next) => {
    res.render('register');
};

exports.registerUser = (req, res, next) => {
    const password = req.body.password;
    const email = req.body.email;

    bcrypt.hash(password, 12)
    .then(hashPassword => {
        User.create({
            email: email,
            password: hashPassword
        });
    })
    .then(user => {
        res.redirect('/');
    });
};