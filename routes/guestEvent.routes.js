const express = require("express");
const router = express.Router();
const auth = require('../middleware/authorization'); // Middleware de autenticación

const { createEvent, getEventsByBooking, getEventById } = require("../controllers/guestEvent.controller");

// Rutas para GuestEvent
router.post("/", auth, createEvent); // Crear nuevo evento
router.get("/:id_booking", auth, getEventsByBooking); // Obtener todos los eventos por ID de booking
router.get("/event/:id", auth, getEventById); // Obtener un evento por ID específico

module.exports = router;
