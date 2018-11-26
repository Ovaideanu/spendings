module.exports = (sequelize, Sequelize) => {
    const Spending = sequelize.define('spending', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        amount: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        date: {
            type: Sequelize.DATE,
            allowNull:false
        }
    });

    Spending.associate = (models) => {
        Spending.belongsTo(models['user'], {
            foreignKey: 'userId',
            onDelete: 'CASCADE'
        });
    };

    return Spending;
};