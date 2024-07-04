const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const model = require("./models/todoconfig");
// Middlewares
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/test", {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.get("/get", (req, res) => {
  model
    .find()
    .then((resu) => res.json(resu))
    .catch((err) => res.json(err));
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  model
    .findByIdAndUpdate({ _id: id }, { done: true })
    .then((resu) => res.json(resu))
    .catch((err) => res.json(err));
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  model
    .findByIdAndDelete({ _id: id })
    .then((resu) => res.json(resu))
    .catch((err) => res.json(err));
});

// Define route for adding tasks
app.post("/add", (req, res) => {
  const task = req.body.task;
  model
    .create({
      task: task,
    })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
  // Here you can handle the task data as needed
  console.log("Received task:", task);

  // You might want to save the task to MongoDB her
});

// Start the server
app.listen(3001, () => {
  console.log("Server running on port 3001");
});
