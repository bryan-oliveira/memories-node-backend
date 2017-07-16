const logsHelper = require('../../helpers/logsHelper')
const dbHelper = require('../../helpers/dbUserHelper')
const respondHelper = require('../../helpers/respondHelper')

exports.list_users = (req, res) => {
  logsHelper.request('/users','GET')
  dbHelper.find_all((err, users) => {
    if (err) respondHelper.fail(res, err)
    respondHelper.success(res, users)
  })
}

exports.create_user = (req, res) => {
  logsHelper.request('/users','POST')
  dbHelper.save_user(req.body, (err, user) => {
    if (err) respondHelper.fail(res, err)
    respondHelper.success(res, user)
  })
}

exports.find_user = (req, res) => {
  logsHelper.request('/users/:userId','GET')
  dbHelper.find_user(req.params.userId, (err, user) => {
    if (err) respondHelper.fail(res, err)
    respondHelper.success(res, user)
  })
}

exports.update_user = (req, res) => {
  logsHelper.request('/users/:userId','PUT')
  dbHelper.update_user(req.params.userId, req.body, (err, user) => {
    if (err) respondHelper.fail(res, err)
    respondHelper.success(res, user)
  })
}

exports.delete_user = (req, res) => {
  logsHelper.request('/users/:userId','DELETE')
  dbHelper.delete_user(req.params.userId, (err, user) => {
    if (err) respondHelper.fail(res, err)
    respondHelper.success(res, {
      message: `User[${req.params.userId}] successfully deleted`
    })
  })
}
