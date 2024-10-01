const express = require("express");
const router = express.Router();
const auth = require('../middleware/authorization'); // Middleware de autenticación

const { createInitialGuests, findAllGuests, findGuestById, updateGuest, deleteGuest } = require("../controllers/guest.controller");

// Rutas para Guest
router.get("/init", auth, createInitialGuests); // Inicializar guest
router.get("/", auth, findAllGuests); // Obtener todos los guest
router.get("/:id", auth, findGuestById); // Obtener un guest por ID
router.put("/:id", auth, updateGuest); // Actualizar un guest
router.delete("/:id", auth, deleteGuest); // Eliminar un guest

module.exports = router;
