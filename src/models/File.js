const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  size: { type: Number },
  mimeType: { type: String },
  url: { type: String, required: true },
  name: { type: String, required: true },
  path: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  uploadedAt: { type: Date, default: Date.now },
  originalName: { type: String, required: true },
});

module.exports = mongoose.model("File", fileSchema);
