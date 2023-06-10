import Booking from "../models/bookings";
import User from "../models/user";
import Movie from "../models/movie";
//import movie from "../models/movie";

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
  const { userId, movieId, tickets, seatsbooked } = req.body;

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
      seatsbooked,
    });

    try {
      await booking.save();
    } catch (err) {
      return console.log(err);
    }

    movie.quantity = movie.quantity - tickets;
    for (let i = 0; i < seatsbooked.length; i++) {
      movie.seats[seatsbooked[i]] = true;
    }
    try {
      await movie.save();
    } catch (err) {
      return console.log(err);
    }

    user.bookings.push(booking);
    try {
      await user.save();
    } catch (err) {
      return console.log(err);
    }

    res.status(200).json({ message: "Tickets booked successfully", booking });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while booking tickets" });
  }
};

// ************* HELPER APIS ***************
// get booking by id

export const getBookingById = async (req, res, next) => {
  const bookingId = req.params.id;

  try {
    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    return res.status(200).json({ booking });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error fetching booking" });
  }
};

export const deleteBooking = async (req, res, next) => {
  const bookingId = req.params.id;
  try {
    // Find the movie by ID and remove it
    const deletedbooking = await Booking.findByIdAndRemove(bookingId);

    if (!deletedbooking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    let movie = "";
    try {
      movie = await Movie.findById(deletedbooking.movie);
      movie.quantity = movie.quantity + deletedbooking.tickets;
      for (let i = 0; i < deletedbooking.seatsbooked.length; i++) {
        movie.seats[deletedbooking.seatsbooked[i]] = false;
      }
    } catch (err) {
      return console.log(err);
    }

    try {
      await movie.save();
    } catch (err) {
      return console.log(err);
    }

    let user = "";
    try {
      await User.findOneAndUpdate(
        { _id: deletedbooking.user },
        { $pull: { bookings: deletedbooking.id } }
      );
    } catch (err) {
      return console.log(err);
    }

    res
      .status(200)
      .json({ message: "Tickets Cancelled successfully", deletedbooking });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while canceling tickets" });
  }
};
