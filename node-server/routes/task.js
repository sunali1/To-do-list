const mongoose = require('mongoose');
let Task = require('../models/task');

// GET /tasks route to retrieve all the tasks
function getTasks(req, res) {
  //query the db and if no errors, send all tasks
  let query = Task.find({});
  query.exec((err, tasks) => {
    if(err) res.send(err)
    //If no errors, send back to client
    res.json(tasks);
  })
}

//export all functions
module.exports = { getTasks }
