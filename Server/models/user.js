import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  bookings: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Movie",
      required: true,
    },
  ],
});

export default mongoose.model("User", userSchema);
