const express = require("express");

const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signUp);

router.post("/login", authController.login);

router.post("/forgotPassword", authController.forgotPassword);

router
  .route("/")
  .get(userController.getAllUsers)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
