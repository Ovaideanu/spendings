const SpendingType = require('../models/spendingType');

exports.view = (req, res, next) => {
    res.render('createSpendingType');
};

exports.createSpendingType = (req, res, next) => {
    const spendingTypeName = req.body.spendingType;
    SpendingType.create({
        name: spendingTypeName
    }).then(result => {
        res.redirect('/create-spending-type');
    }).catch(err => console.log(err));
};