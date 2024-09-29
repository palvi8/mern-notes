const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();
dotenv.config();
connectDB();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  return res.send("Api is running");
});

app.get("/api/notes", (req, res) => {
  return res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((note) => note._id === req.params.id);
  return res.json(note);
});

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
