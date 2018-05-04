process.env.NODE_ENV = 'test';

const chai = require ('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../index'); //??

chai.use(chaiHttp); //For testing HTTP

describe('GET /items', () => {
  it('should return status 200 when accessing /items URL', done => {
    chai.request(server)
    .get('/items')
    .end((err, res) => {
      res.should.have.status(200);
      done();
    });
  });
});
