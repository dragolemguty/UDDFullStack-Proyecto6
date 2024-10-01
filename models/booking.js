const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  id_guest: { type: mongoose.Types.ObjectId, ref: "guest", required: true },
  id_booking: { type: Number, required: true },
  id_room_array: [{ id_room: {type: mongoose.Types.ObjectId, ref: "room", require: true }}],
  booking_date: { type: Date, required: true },
  arrival_date: { type: Date, required: true },
  departure_date: { type: Date, required: true },
  nights_qty: { type: Number, required: true },
  guests_qty: { type: Number, required: true },
  is_modified: { type: Boolean, default: false },
  is_paid: { type: Boolean, default: false },
  is_cancelled: { type: Boolean, default: false },
  last_update_datetime: { type: Date, required: true }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;