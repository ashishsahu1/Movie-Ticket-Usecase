import express from "express";
import mongoose from "mongoose";

import router from "./routes/user-routes";

const app = express();

// middleware
app.use("/api/user", router);

// 0AH4jVuHYNJBejvG
mongoose
  .connect(
    "mongodb+srv://admin:0AH4jVuHYNJBejvG@moviecluster0.zjn0wcw.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
  })
  .then(() => {
    console.log("Connected To Database and listening to LocalHost:5000");
  })
  .catch((err) => {
    console.log(err);
  });
