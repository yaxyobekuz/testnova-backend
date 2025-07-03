const express = require("express");
const router = express.Router();

// Models
const Test = require("../models/Test");

router.get("/:link", async (req, res) => {
  const { link } = req.params;

  if (!link) {
    return res.status(400).json({ message: "Testlar havolasi mavjud emas" });
  }

  const tests = await Test.find({ link });

  res.send({ ok: true, data: tests });
});

module.exports = router;
