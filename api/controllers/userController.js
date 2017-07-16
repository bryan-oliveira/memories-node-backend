const mongoose = require('mongoose')
const User = require('../models/userModel')
const respondHelper = require('../../helpers/respondHelper')
const logsHelper = require('../../helpers/logsHelper')

exports.list_users = (req, res) => {
  logsHelper.request('/users','GET')
  User.find({}, (err, task) => {
    if (err) respondHelper.fail(res, err)
    respondHelper.success(res, task)
  })
}

exports.create_user = (req, res) => {
  logsHelper.request('/users','POST')
  const new_user = new User(req.body)
  new_user.save((err, user) => {
    if (err) respondHelper.fail(res, err)
    respondHelper.success(res, user)
  })
}

exports.find_user = (req, res) => {
  logsHelper.request('/users/:userId','GET')
  User.findById(req.params.userId, (err, task) => {
    if (err) respondHelper.fail(res, err)
    respondHelper.success(res, task)
  })
}

exports.update_user = (req, res) => {
  logsHelper.request('/users/:userId','PUT')
  User.findOneAndUpdate({
    _id: req.params.userId
  }, req.body, {
    new: true
  }, (err, user) => {
    if (err) respondHelper.fail(res, err)
    respondHelper.success(res, user)
  })
}

exports.delete_user = (req, res) => {
  logsHelper.request('/users/:userId','DELETE')
  User.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err) respondHelper.fail(res, err)
    respondHelper.success(res, {
      message: `User[${user.id}] successfully deleted`
    })
  })
}
