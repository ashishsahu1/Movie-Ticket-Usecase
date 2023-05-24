import Booking from "../models/bookings";
import User from "../models/user";
import Movie from "../models/movie";

export const getAllbookings = async (req, res, next) => {
  let bookings;
  try {
    bookings = await Booking.find();
  } catch (err) {
    console.log(err);
  }

  if (!bookings) {
    return res.status(404).json({ message: "No Bookings yet" });
  }
  return res.status(200).json({ bookings });
};

export const addBooking = async (req, res, next) => {
  const { userId, movieId, tickets } = req.body;

  try {
    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Find the movie by ID
    const movie = await Movie.findById(movieId);

    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }

    // Perform ticket booking logic here
    // Example: Decrease available tickets, add booked tickets to user, etc.
    const booking = new Booking({
      user,
      movie,
      tickets,
    });

    try {
      await booking.save();
    } catch (err) {
      return console.log(err);
    }

    user.bookings.push(booking);
    try {
      await user.save();
    } catch (err) {
      return console.log(err);
    }

    res.status(200).json({ message: "Tickets booked successfully" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while booking tickets" });
  }
};
