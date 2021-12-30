const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    required: true,
    default: "public",
    enum: ["public", "private"],
  },
  body: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  likes: {
    type: [String],
    default: [],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Trip", TripSchema);
