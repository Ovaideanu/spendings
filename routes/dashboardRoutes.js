const express = require('express');
const router = express.Router();
const isAuth = require('../utils/is-auth');

const spendingController = require('../controllers/spending');
const spendingTypeController = require('../controllers/spendingType');

router.get('/spending', isAuth, spendingController.index);

router.get('/create-spending', isAuth, spendingController.createSpendingView);
router.post('/create-spending', isAuth, spendingController.createSpending);

router.get('/create-spending-type', isAuth, spendingTypeController.view);
router.post('/create-spending-type', isAuth, spendingTypeController.createSpendingType);

module.exports = router;