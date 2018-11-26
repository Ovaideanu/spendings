const express = require("express");
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/', userController.index);

router.get('/login', userController.loginView);
router.post('/login', userController.login);

router.get('/register', userController.registerView);
router.post('/register', userController.registerUser);

router.post('/logout', userController.logoutUser);

module.exports = router;