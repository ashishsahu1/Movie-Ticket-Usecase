import express from "express";
import {
  addBooking,
  getAllbookings,
  getBookingById,
  deleteBooking,
} from "../controllers/booking-controller";

const bookingrouter = express.Router();

bookingrouter.get("/", getAllbookings);
bookingrouter.get("/:id", getBookingById);
bookingrouter.post("/addBooking", addBooking);
bookingrouter.delete("/delete/:id", deleteBooking);

export default bookingrouter;
