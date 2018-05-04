process.env.NODE_ENV = 'test';

const chai = require ('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../index'); //??

chai.use(chaiHttp); //For testing HTTP

//Test the /GET route
describe('GET /items', () => {
  it('should GET all the items', done => {
    chai.request(server)
    .get('/items')
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('array');
      res.body.length.should.be.eql(3);
      done();
    });
  });
});
