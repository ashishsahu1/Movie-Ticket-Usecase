import express from "express";
import { addBooking, getAllbookings } from "../controllers/booking-controller";

const bookingrouter = express.Router();

bookingrouter.get("/", getAllbookings);
bookingrouter.post("/addBooking", addBooking);

export default bookingrouter;
