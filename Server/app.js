import express from "express";
import mongoose from "mongoose";
import movierouter from "./routes/movie-routes";
import userrouter from "./routes/user-routes";
import bookingrouter from "./routes/booking-routes";
import cors from "cors";

// Setting up environment for mongodb url
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());

// middleware
app.use(express.json());
app.use("/api/user", userrouter);
app.use("/api/movie", movierouter);
app.use("/api/booking", bookingrouter);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(process.env.PORT);
  })
  .then(() => {
    console.log("Connected To Database and listening to LocalHost:5000");
  })
  .catch((err) => {
    console.log(err);
  });
