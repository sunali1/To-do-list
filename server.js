'use strict';

const express = require ('express'); // call express
const app = express(); // define our app using express
//let fakeData = ['apples', 'oranges', 'bananas'] //this a fakedata array which will soon be a database
//middleware
const bodyParser = require("body-parser"); // configure app to use bodyParser(); this will let us get the data from a POST
const logger = require('morgan');
const task = require('./node-server/routes/task')

const config = require ('./config') // load databse and host port and env config
const mongoose = require('mongoose');
//db connection
mongoose.connect('mongodb://localhost:27017/tasks_test')
mongoose.connection.on('error', err => {
  if (err) {
    console.log('err', err)
  } else {
    console.log('Successfully connected', db);
    }
});


app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
// ROUTES FOR OUR API
// =============================================================================
app.get('/', (req, res) => res.json({message: "Here's your task list!"}))
app.route('/task')
    .get(task.getTasks) //all tasks
    .post(task.postTask);
app.route('/task/:id')
    .get(task.getTask) //one task by id
    .put(task.updateTask)
    .delete(task.deleteTask)


// START THE SERVER
// =============================================================================
app.listen(config.port, config.host, () => {
  console.log(`Express is listening port, ${config.port}` )
});
module.exports = app; //for testing
