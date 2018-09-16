'use strict';

var mongoose = require('mongoose');
var  Task = mongoose.model('mapData');

exports.list_all_tasks = function(req, res) {
  console.log("get");
  Task.find({}, function(err, task) {
   if (err)
     res.send(err);
   res.json(task);
});
};

exports.create_a_task = function(req, res) {
  console.log("create");
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    res.send(req.body);
  });
};

exports.read_a_task = function(req, res) {
  console.log("read");
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

// probably this findOneAndUpdate
exports.update_a_task = function(req, res) {
  console.log("update");
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.delete_a_task = function(req, res) {
  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
  });
};
