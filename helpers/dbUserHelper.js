const mongoose = require('mongoose')
const User = require('../api/models/userModel')

exports.find_all = (callback) => {
  User.find({}, (err, users) => {
    callback(err, users)
  })
}

exports.save_user = (body, callback) => {
  const newUser = new User(body)
  newUser.save((err, user) => {
    callback(err, user)
  })
}

exports.find_user = (userId, callback) => {
  User.findById(userId, (err, user) => {
    callback(err, user)
  })
}

exports.update_user = (userId, body, callback) => {
  User.findOneAndUpdate({
    _id: userId
  }, body, {
    new: true
  }, (err, user) => {
    callback(err, user)
  })
}

exports.delete_user = (userId, callback) => {
  User.remove({
    _id: userId
  }, function(err, user) {
    callback(err, user)
  })
}
