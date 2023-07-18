const express = require("express");
const Post = require("./models/Post");
const app = express();
const path = require("path");
const User = require("./models/User");
require("./conn/conn");
const cors = require("cors");
const auth = require("./routes/auth");
const post = require("./routes/posts");
const category = require("./routes/category.js");
require("./conn/cloudinary");
app.use(express.json());
app.use(cors());
app.use("/api/auth", auth);
app.use("/api/post", post);
app.use("/api/cat", category);

app.get("/search", async (req, res) => {
  const cat = req.query.cat;
  try {
    const data = await Post.find({ categories: cat });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
});

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(1000, () => {
  console.log("Server Started At Port 1000");
});
