const express = require("express");
const {
  createInventoryController,
  getInventoryController,
} = require("../controllers/inventoryController");
const authMiddlerware = require("../middlewares/authMiddlerware");

const router = express.Router();

//Routes
//ADD INVENTORY
router.post("/create-inventory", authMiddlerware, createInventoryController);

//GET INVENTORY
router.get("/get-inventory", authMiddlerware, getInventoryController);

module.exports = router;
