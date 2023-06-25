import Movie from "../models/movie";

export const getAllMovies = async (req, res, next) => {
  let movies;
  try {
    movies = await Movie.find();
  } catch (err) {
    console.log(err);
  }
  if (!movies) {
    return res.status(404).json({ message: "No movie found" });
  }
  return res.status(200).json({ movies });
};

export const addMovies = async (req, res, next) => {
  const { moviename, moviedesc, movieposter, price, quantity } = req.body;
  let existingMovie;
  try {
    existingMovie = await Movie.findOne({ moviename });
  } catch (err) {
    return console.log(err);
  }

  if (existingMovie) {
    return res.status(400).json({
      message: "Movie already Exists",
    });
  }

  const seats = Array(quantity)
    .fill(false)
    .map((value) => value);

  const movie = new Movie({
    moviename,
    moviedesc,
    movieposter,
    price,
    quantity,
    seats,
  });

  try {
    await movie.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ movie });
};

export const searchMovies = async (req, res, next) => {
  const moviename = req.query.term;
  const queryObj = {};

  if (moviename) {
    queryObj.moviename = { $regex: moviename, $options: "i" };
  }

  let movies = {};
  try {
    movies = await Movie.find(queryObj);
  } catch (err) {
    return console.log(err);
  }

  res.status(200).json({ movies });
};

export const deleteMovie = async (req, res, next) => {
  const movieId = req.params.id;

  try {
    // Find the movie by ID and remove it
    const deletedMovie = await Movie.findByIdAndRemove(movieId);

    if (!deletedMovie) {
      return res.status(404).json({ error: "Movie not found" });
    }

    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the movie" });
  }
};

export const getMoviesById = async (req, res, next) => {
  let movieid = req.params.id;
  let movie;
  try {
    movie = await Movie.findById(movieid);
  } catch (err) {
    console.log(err);
  }
  if (!movie) {
    return res.status(404).json({ message: "No movie found" });
  }
  return res.status(200).json({ movie });
};
