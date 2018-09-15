'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  _sig: { type: Number},
  _latitude: { type: Number},
  _longitude: { type: Number},
});

module.exports = mongoose.model('mapData', TaskSchema);
