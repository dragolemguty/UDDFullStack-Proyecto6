const express = require("express");
const router = express.Router();
const auth = require('../middleware/authorization');

const { createInitialGuests, findAllGuests, findGuestById, updateGuest, deleteGuest } = require("../controllers/guest.controller");

/**
 * @swagger
 * tags:
 *   name: Guest
 *   description: Endpoints para la gestión de huéspedes
 */

/**
 * @swagger
 * /guest/init:
 *   get:
 *     summary: Inicializar la base de datos con huéspedes
 *     tags: [Guest]
 *     responses:
 *       200:
 *         description: Huéspedes inicializados con éxito
 */
router.get("/init", createInitialGuests);

/**
 * @swagger
 * /guest:
 *   get:
 *     summary: Obtener todos los huéspedes
 *     tags: [Guest]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de huéspedes obtenida con éxito
 */
router.get("/", auth, findAllGuests);

/**
 * @swagger
 * /guest/{id}:
 *   get:
 *     summary: Obtener un huésped por ID
 *     tags: [Guest]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Huésped obtenido con éxito
 */
router.get("/:id", auth, findGuestById);

/**
 * @swagger
 * /guest/{id}:
 *   put:
 *     summary: Actualizar un huésped
 *     tags: [Guest]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Guest'
 *     responses:
 *       200:
 *         description: Huésped actualizado con éxito
 */
router.put("/:id", auth, updateGuest);

/**
 * @swagger
 * /guest/{id}:
 *   delete:
 *     summary: Eliminar un huésped
 *     tags: [Guest]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Huésped eliminado con éxito
 */
router.delete("/:id", auth, deleteGuest);

module.exports = router;
