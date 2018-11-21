const expect = require('chai').expect;
const SpendingType = require('../../models/spendingType');

describe('Spending Type', () => {
   it('Should create and spending type', done => {
       SpendingType.create({
           name: 'Food'
       })
       .then(spendingType => {
           expect(spendingType.name).to.equal('Food');
           done();
       });
   })
});