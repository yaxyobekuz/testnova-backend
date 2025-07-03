const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  count: { type: Number, default: 0 },
  link: { type: String, required: true },
  title: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  isPublic: { type: Boolean, default: true },
  isPremium: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  description: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Test", testSchema);
