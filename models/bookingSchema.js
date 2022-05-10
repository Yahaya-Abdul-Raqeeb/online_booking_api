const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    contact: {
      type: Number,
      require: true,
    },
    link: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
const Booking = mongoose.model("booking", bookingSchema);
module.exports = Booking;
