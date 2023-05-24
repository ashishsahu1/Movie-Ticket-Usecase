import express from "express";
import { addMovies, getAllMovies } from "../controllers/movie-controller";

const movierouter = express.Router();

movierouter.get("/", getAllMovies);
movierouter.post("/addmovie", addMovies);

export default movierouter;
