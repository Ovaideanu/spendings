module.exports = (sequelize, Sequelize) => {
    const SpendingType = sequelize.define('spendingType', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        }
    });

    return SpendingType;
};