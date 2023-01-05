const mongoose = require("mongoose");

const taskschema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Task is mandatory"],
      min: 10,
      trim: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("task", taskschema);

module.exports = Task;
