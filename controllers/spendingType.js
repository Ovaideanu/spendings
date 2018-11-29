const SpendingType = require('../models').spendingType;

exports.view = async (req, res, next) => {
  const spendingTypes =  await SpendingType.findAll({
    where: { userId: req.session.userId }
  });

  res.render('createSpendingType', {
    spendingTypes: spendingTypes
  })
};

exports.createSpendingType = async (req, res, next) => {
  const spendingTypeName = req.body.spendingType;
  const userId = req.session.userId;

  await SpendingType.create({
    name: spendingTypeName,
    userId: userId
  });

  res.redirect('/create-spending-type');
};