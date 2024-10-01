const express = require("express");
const router = express.Router();
const auth = require('../middleware/authorization'); // Middleware de autenticación

const {  createInitialGuestRanks, findAllGuestRanks, findGuestRankById, updateGuestRank, deleteGuestRank  } = require("../controllers/guestRank.controller");

// Rutas para Guest
router.get("/init", auth, createInitialGuestRanks); // Inicializar guestRank
router.get("/", auth, findAllGuestRanks); // Obtener todos los guestRank
router.get("/:id", auth, findGuestRankById); // Obtener un guestRank por ID
router.put("/:id", auth, updateGuestRank); // Actualizar un guestRank
router.delete("/:id", auth, deleteGuestRank); // Eliminar un guestRank

module.exports = router;
