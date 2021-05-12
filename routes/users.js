const express = require("express");
const router = express.Router();
const { body } = require('express-validator');
const validator = require('../middleware/validator')

const userValidators = [
  body("email").isEmail().withMessage("WHere is my Tequila????"),
  body("password").isStrongPassword({ returnScore: false}).withMessage("Are you kiddin me?")
  // body("firstname").is

];


const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  addUser
} = require("../controllers/usersController");

router
  .route("/")
  .get(getUsers)
  .post(userValidators,validator,addUser);

router
  .route("/:id")
  .get(getUser)
  .delete(deleteUser)
  .put(updateUser);

module.exports = router;
