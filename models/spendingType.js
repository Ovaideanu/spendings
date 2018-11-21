const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const SpendingType = sequelize.define('spending-type', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = SpendingType;