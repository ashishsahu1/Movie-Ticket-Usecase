import mongoose from "mongoose";

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  moviename: {
    type: String,
    required: true,
  },
  moviedesc: {
    type: String,
    required: true,
  },
  movieposter: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  seats: {
    type: [Boolean],
    required: true,
  },
});

export default mongoose.model("Movie", movieSchema);
