// Generated by CoffeeScript 1.8.0
(function() {
  var Schema, mongoose, schema;

  mongoose = require('mongoose');

  Schema = mongoose.Schema;

  schema = Schema({
    open_id: String,
    first_name: String,
    last_name: String,
    email: String
  });

  schema.index({
    open_id: 1
  }, {
    unique: true
  });

  exports.schema = schema;

}).call(this);