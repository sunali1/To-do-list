const mongoose = require('mongoose');
let Task = require('../models/task');

// GET /task route to retrieve all the tasks
function getTasks(req, res) {
  //query the db and if no errors, send all tasks
  let query = Task.find({});
  query.exec((err, tasks) => {
    if(err) res.send(err)
    //If no errors, send back to client
    res.json(tasks);
  })
}
// POST /task route to save a new task to the db
function postTask(req, res) {
  //Creates a new Task and save into db
  const newTask = new Task(req.body);
  newTask.save((err, task) => {
    if(err){
      res.send(err);
    }else{
      res.json({ message: 'Task successfully added!', task });
    }
  });
};
// GET /task route to retrieve one task from the database by given id
function getTask(req, res) {
  Task.findById(req.params.id, (err, task) => {
    if(err){
      res.send(err)
    } else {
      res.json(task)
    };
  });
};
// UPDATE /task route to update one task given its :id
function updateTask(req, res) {
  Task.findById(req.params.id, (err, task) => {
    if(err) res.send(err);
    Object.assign(task, req.body).save((err, task) => { //Object.assign new function in ES6
      if (err) res.send(err);
      res.json({ message: 'Task successfully updated!', task });
    });
  });
};
// DELETE /task route to delete one task given its :id
function deleteTask(req, res) {
  Task.remove({ _id: req.params.id }, (err, result) => {
    if(err) res.send(err);
    res.json({ message: 'Task successfully deleted!', result });
  })
};
//export all functions
module.exports = { getTasks, postTask, getTask, updateTask, deleteTask }
