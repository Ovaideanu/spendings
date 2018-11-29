const Spending = require('../../models').spending;
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
    const spending = await Spending.create({
      type: 'Food',
      amount: 100,
      userId: 1,
      date: new Date('2018-11-23')
    });

    expect(spending.type).to.equal('Food');
    expect(spending.amount).to.equal(100);
    expect(spending.userId).to.equal(1);
    expect(spending.date).to.eql(new Date('2018-11-23'));
  })
});