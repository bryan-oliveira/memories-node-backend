const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MemorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  photo_count: {
    type: Number,
    default: 0,
  },
  friend_count: {
    type: Number,
    default: 0,
  },
  cover_photo: {
    type: String,
    required: true,
  },
  startDateTime: {
    type: Date,
    required: true,
  },
  endDateTime: {
    type: Date,
    required: true,
  },
  Created_date: {
    type: Date,
    default: Date.now,
  },
});

MemorySchema.pre('validate', function (next, done) {
  const memory = this;
  // If both dates are present, make sure start date is before end date
  if (memory.startDateTime !== undefined && memory.endDateTime !== undefined) {
    const start = memory.startDateTime.getTime();
    const end = memory.endDateTime.getTime();
    if (start > end) {
      const err = memory.invalidate('startDateTime', 'Start date must be before end date');
      next(err);
    }
  }
  next();
});

module.exports = mongoose.model('Memory', MemorySchema);
