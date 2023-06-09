import express from "express";
import jwt from "jsonwebtoken";
import {
  addMovies,
  getAllMovies,
  searchMovies,
  deleteMovie,
  getMoviesById,
} from "../controllers/movie-controller";

import * as dotenv from "dotenv";
dotenv.config();

const secretKey = process.env.SECRET_KEY;

const movierouter = express.Router();

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.user = user; // Attach the decoded user object to the request
    next();
  });
};

movierouter.get("/", getAllMovies);
movierouter.post("/addmovie", addMovies);
movierouter.get("/search", searchMovies);
movierouter.delete("/:id", deleteMovie);
movierouter.get("/:id", getMoviesById);

export default movierouter;
