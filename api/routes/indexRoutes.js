const logsHelper = require('../../helpers/logsHelper')

module.exports = (app) => {
  app.route('/')
    .get((req, res) => {
      logsHelper.request('/','GET')
      res.json({
        success: true,
        health: 'Memories API Server - ON :D'
      })
    })
}
