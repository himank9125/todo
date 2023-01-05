const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRouter = require("./routes/userRoute");
const taskRouter = require("./routes/taskRoute");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Home Page");
});
app.use("/user", userRouter);
app.use("/task", taskRouter);

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to DB");
    app.listen(process.env.PORT, () => {
      console.log("Server Running");
    });
  })
  .catch(() => {
    console.log("Something went wrong with db");
  });
