const http_mocks = require('node-mocks-http');
const controller = require('../../controllers/spendingType');
const SpendingType = require('../../models').spendingType;
const User = require('../../models').user;

const buildResponse = () => {
  return http_mocks.createResponse({eventEmitter: require('events').EventEmitter})
};


describe('Spending types controller', () => {
  beforeEach(async () => {
    await models.sequelize.sync({force: true});
    await User.create({
      email: 'test@test.com',
      password: 'password'
    });

    await SpendingType.create({
      name: 'Food',
      userId: 1
    })
  });

  it ('Returns the spending types', async () => {
    const response = buildResponse();
    const request = http_mocks.createRequest({
      method: 'GET',
      url: '/create-spending-type',
      session: {
        userId: 1
      }
    });

    await controller.view(request, response);
    const spendingTypes = await response.on('end', () => {
      return response._getData();
    });
    const spendingItems = spendingTypes._getRenderData().spendingTypes;

    expect(spendingItems[0].name).to.equal('Food');
    expect(spendingItems[0].userId).to.equal(1);
  });

  it ('Creates a spending type', async () => {
    const response = buildResponse();
    const request = http_mocks.createRequest({
      method: 'GET',
      url: '/create-spending-type',
      body: {
        spendingType: 'Clothes'
      },
      session: {
        userId: 1
      }
    });

    await controller.createSpendingType(request, response);
    const serverResponse = await response.on('end', () => {
      return response._getData();
    });

    const spendingTypes = await SpendingType.findAll({
      where: { userId: 1 }
    });

    expect(spendingTypes.length).to.equal(2);
    expect(serverResponse.statusCode).to.equal(302);
  });
});