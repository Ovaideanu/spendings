const SpendingType = require('../../models').spendingType;
const User = require('../../models').user;

describe('Spending Type', () => {
  beforeEach(async () => {
    await models.sequelize.sync({force: true});
    await User.create({
      email: 'test@test.com',
      password: 'password'
    })
  });


  it('Should create a spending type', async () => {
    const spendingType = await SpendingType.create({
      name: 'Food',
      userId: 1
    });

    expect(spendingType.name).to.equal('Food');
  })
});