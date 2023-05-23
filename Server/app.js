import express from "express";
import mongoose from "mongoose";

import router from "./routes/user-routes";

// Setting up environment for mongodb url
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use("/api/user", router);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(5000);
  })
  .then(() => {
    console.log("Connected To Database and listening to LocalHost:5000");
  })
  .catch((err) => {
    console.log(err);
  });
