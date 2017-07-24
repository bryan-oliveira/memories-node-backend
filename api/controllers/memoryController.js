const logsHelper = require('../../helpers/logsHelper');
const dbHelper = require('../../helpers/dbMemoryHelper');
const respondHelper = require('../../helpers/respondHelper');

exports.list_memories = (req, res) => {
  logsHelper.request('/memories', 'GET');
  dbHelper.find_all((err, memories) => {
    if (err) respondHelper.fail(res, err);
    respondHelper.success(res, memories);
  });
};

exports.create_memory = (req, res) => {
  logsHelper.request('/memories', 'POST');
  dbHelper.save_memory(req.body, (err, memory) => {
    if (err) respondHelper.fail(res, err);
    respondHelper.success(res, memory);
  });
};

exports.find_memory = (req, res) => {
  logsHelper.request('/memories/:memoryId', 'GET');
  dbHelper.find_memory(req.params.memoryId, (err, memory) => {
    if (err) respondHelper.fail(res, err);
    respondHelper.success(res, memory);
  });
};

exports.update_memory = (req, res) => {
  logsHelper.request('/memories/:memoryId', 'PUT');
  dbHelper.update_memory(req.params.memoryId, req.body, (err, memory) => {
    if (err) respondHelper.fail(res, err);
    respondHelper.success(res, memory);
  });
};

exports.delete_memory = (req, res) => {
  logsHelper.request('/memories/:memoryId', 'DELETE');
  dbHelper.delete_memory(req.params.memoryId, (err, memory) => {
    if (err) respondHelper.fail(res, err);
    respondHelper.success(res, {
      message: `Memory[${req.params.memoryId}] successfully deleted: ${memory}`,
    });
  });
};
