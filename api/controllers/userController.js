var mongoose = require('mongoose')

var User = require('../models/userModel')


exports.list_all_users = function(req, res) {
  User.find({}, function(err, task) {
    if (err)
      res.send(err)
    res.json(task)
  })
}


exports.create_user = function(req, res) {
  var new_user = new User(req.body)
  new_user.save(function(err, user) {
    if (err)
      res.send(err)
    res.json(user)
  })
}


exports.get_user_by_id = function(req, res) {
  Task.findById(req.params.userId, function(err, task) {
    if (err)
      res.send(err)
    res.json(task)
  })
}


exports.update_user = function(req, res) {
  User.findOneAndUpdate({
    _id: req.params.userId
  }, req.body, {
    new: true
  }, function(err, user) {
    if (err)
      res.send(err)
    res.json(user)
  })
}


exports.delete_user = function(req, res) {
  User.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      res.send(err)
    res.json({
      message: 'User successfully deleted'
    })
  })
}
