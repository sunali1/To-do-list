//During tests env variable is set to test
process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const Task = require('../node-server/models/task');

const chai = require ('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server'); //??
//console.log('DB1', mongoose.connection)
//console.log('DB', mongoose.connection.readyState) // to check state of connection to the database

chai.use(chaiHttp); //For testing HTTP

describe('Tasks', () => {
  beforeEach((done) => { //Empty database before each test
    Task.remove({}, (err) => {
      done();
    });
  });
  // Test the / route
  describe('/', () => {
    it('should display a Welcome message', done => {
      chai.request(server)
      .get('/')
      .end((err, res) => {
        console.log(res.body.message);
        res.should.have.status(200);
        res.body.should.have.property('message').eql('Here\'s your task list!');
        done();
      });
    });
  });
  // Test the /GET route
  describe('/GET tasks', () => {
    it('should GET all the tasks', done => {
      chai.request(server)
      .get('/task')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(0);
        done();
      });
    });
  });
});
// Test the /POST route
describe('/POST task', () => {
  it('should not POST without task detail', (done) => {
    let task = { completed: false }
    chai.request(server)
    .post('/task')
    .send(task)
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.have.property("errors");
      res.body.errors.should.have.property('detail');
      res.body.errors.detail.should.have.property('kind').eql('required');
      // console.log(res.body.errors.detail);
      done();
    });
  });
  // it('should POST a task and add it to the database', (done) => {
  //   const task = {
  //                 detail: "Call Elon in the morning",
  //                 completed: 'No'
  //               }
  //   chai.request(server)
  //   .post('/task')
  //   .send(task)
  //   .end((err, res) => {
  //     console.log('TASK', task)
  //     console.log('RES', res)
  //     //console.log(res.body);
  //     res.should.have.status(201);
  //     res.body.should.be.a('Object');
  //     res.should.have.property(message).eql('Task successfully added!');
  //     //res.body.should.have.property('detail');
  //     //res.body.should.have.property('completed');
  //     done();
  //   });
  // });
});
// describe('/GET/:id task', () => {
//   it('should GET a task from the database by a given id', (done) => {
//     let task = new Task({ detail: "Call Elon in the morning", completed: 'No' });
//     task.save((err, task ) => {
//       console.log('SAVED TASK', task)
//       chai.request(server)
//       .get('/task' + task.id)
//       .send(task)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.have.property('detail');
//       });
//     });
//   });
// });
