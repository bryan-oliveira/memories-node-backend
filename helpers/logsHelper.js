const LogsHelper = () => {}

LogsHelper.request = (route, method) => {
  console.log(`- ${method} ${route} served by process[${process.pid}]`)
}

module.exports = LogsHelper
