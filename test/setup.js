process.env.NODE_ENV = 'test';

const chai = require('chai');
const models = require('../models');

global.chai = chai;
global.expect = chai.expect;
global.models = models;