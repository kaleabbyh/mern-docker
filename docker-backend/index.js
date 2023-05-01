const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

try {
  mongoose.connect("mongodb://mongo:27017/docker");
  console.log("mongodb is connected");
} catch (error) {
  console.log(error);
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", require("./routes/useroute"));

app.get("/docker", (req, res) => {
  res.json({ response: "is sent" });
});

app.listen(5000, () => {
  console.log("app is running");
});
