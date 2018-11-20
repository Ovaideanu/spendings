const SpendingType = require('../models/spendingType');

exports.index = (req, res, next) => {
    res.render('homePage');
};

exports.createSpendingType = (req, res, next) => {
    const spendingTypeName = req.body.spendingType;
    SpendingType.create({
        name: spendingTypeName
    }).then(result => {
        res.redirect('/');
    }).catch(err => console.log(err));
};