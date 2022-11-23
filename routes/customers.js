const express = require("express");
const router = express.Router();
const { Customer, validator } = require("../models/customer");
const validate = require("../middleware/validate");
const isValidObjectId = require("../middleware/isValidObjectId");
const asyncHandler = require("../middleware/asyncHandler");

// Crear un cliente
router.post(
  "/",
  validate(validator),
  asyncHandler(async (req, res) => {
    await Customer(req.body).save();
    res.status(200).send("Cliente creado");
  })
);

// Obtener todos los clientes
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const customers = await Customer.find();
    res.send(customers);
  })
);

//Obtener  cliente por id
router.get(
  "/:id",
  isValidObjectId,
  asyncHandler(async (req, res) => {
    const customer = await Customer.findById(req.params.id);
    res.json(customer);
  })
);

// Update
router.put(
  "/:id",
  isValidObjectId,
  asyncHandler(async (req, res) => {
    await Customer.findByIdAndUpdate({ _id: req.params.id }, req.body);
    res.status(200).send("actualizacion exitosa");
  })
);

// Delete
router.delete(
  "/:id",
  isValidObjectId,
  asyncHandler(async (req, res) => {
    await Customer.findByIdAndDelete(req.params.id);
    res.status(200).send("borrado exitoso");
  })
);

module.exports = router;
