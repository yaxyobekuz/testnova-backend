const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  lastName: { type: String },
  username: { type: String, default: null },
  firstName: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, default: "active", enum: ["active", "archived"] },
});

module.exports = mongoose.model("User", userSchema);
