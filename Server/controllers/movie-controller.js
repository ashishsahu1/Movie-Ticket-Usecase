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
  const { moviename, movieposter, price } = req.body;
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
  const movie = new Movie({
    moviename,
    movieposter,
    price,
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

  let myData = {};
  try {
    myData = await Movie.find(queryObj);
  } catch (err) {
    return console.log(err);
  }

  res.status(200).json({ myData });
};
