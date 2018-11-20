const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.index);
router.post('/create-spending-type', homeController.createSpendingType);

module.exports = router;