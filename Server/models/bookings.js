import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  movie: {
    type: mongoose.Types.ObjectId,
    ref:"Movie",
    required:true,
  },
  tickets:{
    type:Number,
    required:true,
  },
  seatsbooked:{
    type:[Number],
    required:true,
  }
});

export default mongoose.model("Booking", bookingSchema);
