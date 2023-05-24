import express from "express";
import {
  addMovies,
  getAllMovies,
  searchMovies,
  deleteMovie
} from "../controllers/movie-controller";

const movierouter = express.Router();

movierouter.get("/", getAllMovies);
movierouter.post("/addmovie", addMovies);
movierouter.get("/search",searchMovies);
movierouter.delete("/:id",deleteMovie);

export default movierouter;
