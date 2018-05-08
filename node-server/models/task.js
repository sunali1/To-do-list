let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Task schema definition
let TaskSchema = new Schema(
  {
    detail: { type: String, required: true },
    completed: { type: Boolean, required: true },
  }
)

module.exports = mongoose.model('Task', TaskSchema);
