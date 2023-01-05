const express = require("express");
const authUser = require("../middleware/authUser");
const Task = require("../models/Task");
const User = require("../models/User");
const router = express.Router();
router.post("/addtask", authUser, async (req, res) => {
  try {
    const { text } = req.body;
    const task = await Task.create({ text, createdBy: req.userId });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/mytask", authUser, async (req, res) => {
  try {
    const tasks = await Task.find({ createdBy: req.userId });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
