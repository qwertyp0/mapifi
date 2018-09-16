'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  sig: Number,
  latitude: Number,
  longitude: Number,
  Created_date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('mapData', TaskSchema);
