const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  isCorrect: { type: Boolean, default: false },
});

const questionSchema = new mongoose.Schema({
  options: [optionSchema],
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  difficulty: {
    type: String,
    default: "medium",
    enum: ["easy", "medium", "hard"],
  },
});

module.exports = mongoose.model("Question", questionSchema);
