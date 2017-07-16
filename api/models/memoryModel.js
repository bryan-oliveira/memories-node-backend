const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MemorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  photo_count: {
    type: Number,
    required: true,
  },
  friend_count: {
    type: Number,
    required: true,
  },
  cover_photo: {
    type: String,
    required: true,
  },
  startDateTime: {
    type: Date,
    required: false,
  },
  endDateTime: {
    type: Date,
    required: false,
  },
  Created_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Memory', MemorySchema);
