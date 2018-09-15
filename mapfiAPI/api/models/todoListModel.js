'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let date = new Date();
var TaskSchema = new Schema({
  user_id: { type: Number },
  ssid: { type: Number},
  sigStrgth: { type: Number},
  latitude: { type: Number},
  longitude: { type: Number},
  time: { type: String,
    default: String(new Date().toLocaleTimeString())},
  createdDate: {
    type: String,
    default: String(date.getMonth()) + "-" + String(date.getDate()) + "-" + String(date.getFullYear()),
  },
});

module.exports = mongoose.model('mapData', TaskSchema);
