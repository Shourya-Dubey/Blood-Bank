const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../controllers/authController");
const authMiddlerware = require("../middlewares/authMiddlerware");
const router = express.Router();

//Routes
//REGISTER
router.post("/register", registerController);

//LOGIN
router.post("/login", loginController);

//GET CURRENT USER
router.get("/current-user", authMiddlerware, currentUserController);

module.exports = router;
