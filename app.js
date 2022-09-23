//Import packages
require("dotenv").config();
require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("express-async-errors");
const connectDB = require("./config/dbCon");

// CONNECT NA MONGO

connectDB();

//routers
const prijaveRouter = require("./routes/prijave");
const loginRouter = require("./routes/auth");
const pitanjeRouter = require("./routes/postavipitanje");

//middleware
const errorHandler = require("./middleware/errorhandler");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", loginRouter);
app.use("/api/prijave", prijaveRouter);
app.use("/api/postavipitanje", pitanjeRouter);
// mislim da cu ovo da obrisem
app.get("/", (req, res) => {
  res.send("BACK ZA S2S");
  
  //nzm ni sta ovo radi
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
mongoose.connection.once("open", () => {
  console.log("connected to mongoDB");
  app.listen(PORT, () => console.log("Server started on PORT ${PORT}"));
});
// app.listen(PORT, () => console.log("Server started"));
// mongoose.connect(process.env.DB_CONNECTION, () => console.log("connected"));

