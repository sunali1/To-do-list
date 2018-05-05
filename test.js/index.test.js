process.env.NODE_ENV = 'test';

const chai = require ('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../index'); //??

chai.use(chaiHttp); //For testing HTTP

//Test the / route
describe('/', () => {
  it('should display a Welcome message', done => {
    chai.request(server)
    .get('/')
    .end((err, res) => {
      res.should.have.status(200);
      res.text.should.be.eql('Your To-do-List')
      done();
    });
  });
});
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

//Test the /POST route
describe('POST /item', () => {

  it('should not POST an item which is not of type string', done => {
    chai.request(server)
    .post('/item')
    .send(undefined)
    .end((err, res) => {
      res.should.have.status(400)
      res.text.should.be.eql('Item not added');
      done();
    });
  });

  it('should POST an item and add it to the fakeData', done => {
    let item = {"fruit": "peach"}
    chai.request(server)
    .post('/item')
    .send(item)
    .end((err, res) => {
      res.should.have.status(201);
      res.body.should.be.a('Object');
      res.text.should.be.eql(`peach was added`);
      done();
    });
  });
});
//Test the /GET/:id route
describe('GET /item/:id', () => {
  it('should GET an item by the given id', done => {
    chai.request(server)
    .get('/item/1')
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('Object');
      res.text.should.be.eql('oranges');
      done();
    })
  })
});
// Test the /DELETE/:id route
describe('DELETE /item/:id', () => {
  it('should DELETE an item by given id', done => {
    chai.request(server)
    .delete('/item/1')
    .end((err, res) => {
      res.should.have.status(202);
      res.text.should.be.eql('oranges')
      done();
    })
  })
})
