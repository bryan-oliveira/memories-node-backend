const mongoose = require('mongoose')
const User = require('../models/userModel')

exports.list_all_users = (req, res) => {
  User.find({}, (err, task) => {
    if (err)
      res.send(err)
    res.json(task)
  })
}

exports.create_user = (req, res) => {
  const new_user = new User(req.body)
  new_user.save((err, user) => {
    if (err)
      res.send(err)
    res.json(user)
  })
}

exports.get_user_by_id = (req, res) => {
  Task.findById(req.params.userId, (err, task) => {
    if (err)
      res.send(err)
    res.json(task)
  })
}

exports.update_user = (req, res) => {
  User.findOneAndUpdate({
    _id: req.params.userId
  }, req.body, {
    new: true
  }, (err, user) => {
    if (err)
      res.send(err)
    res.json(user)
  })
}

exports.delete_user = (req, res) => {
  User.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      res.send(err)
    res.json({
      message: `User[${user.id}] successfully deleted`
    })
  })
}
