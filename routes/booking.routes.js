const express = require("express");
const router = express.Router();
const auth = require('../middleware/authorization'); // Middleware de autenticación

const { createInitialBookings, createBooking, findToday, bookDetails, updateRoom, deleteBook, 
    hotelFilter, datesFilter, roomClassFilter, paidStatus, qtySearch } = require("../controllers/booking.controller");

const handleQueryParams = (req, res, next) => {
    const { hotel, fecha_inicio, fecha_fin, tipo_habitacion, estado, num_huespedes } = req.query;

    if (hotel) {
        return hotelFilter(req, res, next);
    } else if (fecha_inicio && fecha_fin) {
        return datesFilter(req, res, next);
    } else if (tipo_habitacion) {
        return roomClassFilter(req, res, next);
    } else if (estado) {
        return paidStatus(req, res, next);
    } else if (num_huespedes) {
        return qtySearch(req, res, next);
    } else {
        return findToday(req, res, next);
    }
};
router.get("/init", createInitialBookings); // Reservas iniciales
router.post("/", auth, createBooking); // Crear reserva
router.get("/", auth, handleQueryParams); // Filtros de búsqueda para reservas
router.get("/:id", auth, bookDetails); // Detalles de una reserva por ID
router.put("/:id", auth, updateRoom); // Actualizar habitación de una reserva
router.delete("/:id", auth, deleteBook); // Eliminar una reserva

module.exports = router;
