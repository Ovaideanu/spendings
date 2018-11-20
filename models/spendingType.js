const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const SpendingType = sequelize.define('spending-type', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = SpendingType;