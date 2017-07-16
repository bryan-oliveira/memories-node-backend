const RespondHelper = () => {}

RespondHelper.fail = (res, data) => {
  respond(res, false, data)
}

RespondHelper.success = (res, data) => {
  respond(res, true, data)
}

const respond = (res, success, data) => {
  res.json({
    success: success,
    result: data
  })
}

module.exports = RespondHelper
