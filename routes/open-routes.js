const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const spendingTypeController = require('../controllers/spendingType');

router.get('/', homeController.index);

router.get('/register', homeController.register);
router.post('/register', homeController.registerUser);

router.get('/create-spending-type', spendingTypeController.view);
router.post('/create-spending-type', spendingTypeController.createSpendingType);

module.exports = router;