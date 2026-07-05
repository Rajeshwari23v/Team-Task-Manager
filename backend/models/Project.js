const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    status: {
      type: String,
      default: "Pending",
    },

    manager: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);