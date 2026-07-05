const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    taskName: {
      type: String,
      required: true,
    },

    assignedTo: {
      type: String,
      required: true,
    },

    priority: {
      type: String,
      enum: ["High", "Medium", "Low"],
      default: "Medium",
    },

    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);