process.env.NODE_ENV = 'test';

const chai = require('chai');
const models = require('../models');

models.sequelize.sync();


global.chai = chai;
global.expect = chai.expect;