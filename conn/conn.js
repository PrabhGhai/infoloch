const mongoose = require("mongoose");
const conn = async (req, res, next) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://infoloch22:infoloch123456@cluster0.kcyk0rt.mongodb.net/infoloch"
      )
      .then(() => {
        console.log("connected");
      });
  } catch (error) {
    res.starus(400).json({ message: "not connected" });
    console.log(error);
  }
};

conn();
