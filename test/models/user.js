const User = require('../../models')['user'];
const bcrypt = require('bcryptjs');

describe('User model', () => {
  beforeEach(async () => {
    await models.sequelize.sync({force: true});
  });


  it('Should create a user', async () => {
    const hashedPassword = await bcrypt.hash('admin123', 12);
    const user = await User.create({
      email: 'test1@test.com',
      password: hashedPassword
    });
    const matchingPasswords = await bcrypt.compare('admin123', user.password);

    expect(user.email).to.equal('test1@test.com');
    expect(matchingPasswords).to.be.true;
  })
});