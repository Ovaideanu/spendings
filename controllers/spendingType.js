const SpendingType = require('../models')['spendingType'];

exports.view = (req, res, next) => {
    SpendingType.findAll({
        where: {userId: req.session.userId}
    })
    .then(spendingTypes => {
        res.render('createSpendingType', {
            spendingTypes: spendingTypes
        });
    })
    .catch(err => console.log(err));
};

exports.createSpendingType = (req, res, next) => {
    const spendingTypeName = req.body.spendingType;
    const userId = req.session.userId;
    SpendingType.create({
        name: spendingTypeName,
        userId: userId
    }).then(result => {
        res.redirect('/create-spending-type');
    }).catch(err => console.log(err));
};