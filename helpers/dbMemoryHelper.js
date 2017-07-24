const Memory = require('../api/models/memoryModel');

exports.find_all = (callback) => {
  Memory.find({}, (err, memories) => {
    callback(err, memories);
  });
};

exports.save_memory = (body, callback) => {
  const newMemory = new Memory(body);
  newMemory.save((err, memory) => {
    callback(err, memory);
  });
};

exports.find_memory = (memoryId, callback) => {
  Memory.findById(memoryId, (err, memory) => {
    callback(err, memory);
  });
};

exports.update_memory = (memoryId, body, callback) => {
  Memory.findOneAndUpdate({
    _id: memoryId,
  }, body, {
    new: true,
  }, (err, memory) => {
    callback(err, memory);
  });
};

exports.delete_memory = (memoryId, callback) => {
  Memory.remove({
    _id: memoryId,
  }, (err, memory) => {
    callback(err, memory);
  });
};
