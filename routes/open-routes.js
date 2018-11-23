const express = require('express');
const router = express.Router();
const isAuth = require('../utils/is-auth');

const homeController = require('../controllers/homeController');
const spendingTypeController = require('../controllers/spendingType');

router.get('/', homeController.index);

router.get('/login', homeController.loginView);
router.post('/login', homeController.login);

router.get('/register', homeController.registerView);
router.post('/register', homeController.registerUser);

router.get('/create-spending-type', isAuth, spendingTypeController.view);
router.post('/create-spending-type', isAuth, spendingTypeController.createSpendingType);

module.exports = router;