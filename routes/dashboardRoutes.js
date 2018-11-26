const express = require('express');
const router = express.Router();
const isAuth = require('../utils/is-auth');

const spendingTypeController = require('../controllers/spendingType');

router.get('/create-spending-type', isAuth, spendingTypeController.view);
router.post('/create-spending-type', isAuth, spendingTypeController.createSpendingType);

module.exports = router;