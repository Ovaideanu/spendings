const dateFormat = require('dateformat');

const Spending = require('../models')['spending'];
const SpendingType = require('../models')['spendingType'];

exports.index = (req, res, next) => {
    Spending.findAll({
        where: {userId: req.session.userId}
    })
    .then(spending => {
        const spendingItems = spending.map(item => {
            return {
                type: item.type,
                amount: item.amount,
                date: dateFormat(item.date, 'dd.mm.yyyy')
            }
        });
        res.render('spending', {
            spendingItems: spendingItems
        });
    })
    .catch(err => console.log(err));
};

exports.createSpendingView = (req, res, next) => {
    SpendingType.findAll({
        where: {userId: req.session.userId}
    })
    .then(spendingTypes => {
        res.render('createSpending', {
            spendingTypes: spendingTypes
        });
    })
    .catch(err => console.log(err));
};

exports.createSpending = (req, res, next) => {
    const {type, amount, date} = req.body;
    const userId = req.session.userId;
    Spending.create({
        type: type,
        amount: amount,
        date: new Date(date),
        userId: userId
    })
    .then(() => res.redirect('/spending'))
    .catch(err => console.log(err));
};
