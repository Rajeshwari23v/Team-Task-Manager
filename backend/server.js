const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import Routes
const userRoutes = require("./routes/userRoutes");
const projectRoutes = require("./routes/projectRoutes");
const taskRoutes = require("./routes/taskRoutes");

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("🚀 Team Task Manager Backend Running Successfully");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected:", mongoose.connection.host);

    app.listen(process.env.PORT || 5000, () => {
      console.log(
        `🚀 Server running on port ${process.env.PORT || 5000}`
      );
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Failed");
    console.log(err.message);
  });