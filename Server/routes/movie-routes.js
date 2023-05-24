import express from "express";
import {
  addMovies,
  getAllMovies,
  searchMovies,
} from "../controllers/movie-controller";

const movierouter = express.Router();

movierouter.get("/", getAllMovies);
movierouter.post("/addmovie", addMovies);
movierouter.get("/search",searchMovies);

export default movierouter;
