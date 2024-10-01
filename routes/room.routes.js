const express = require("express");
const router = express.Router();
const auth = require('../middleware/authorization'); // Middleware de autenticación

const { createInitialRooms, findAllRooms, findRoomById, updateRoom, deleteRoom } = require("../controllers/room.controller");

// Rutas para Room
router.get("/init", createInitialRooms); // Crear una nueva habitación
router.get("/", auth, findAllRooms); // Obtener todas las habitaciones
router.get("/:id", auth, findRoomById); // Obtener una habitación por ID
router.put("/:id", auth, updateRoom); // Actualizar una habitación
router.delete("/:id", auth, deleteRoom); // Eliminar una habitación

module.exports = router;
