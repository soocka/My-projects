const express = require("express");
const userController = require("../controllers/users.controller");
const { body } = require("express-validator");
const router = express.Router();

// permet de valider le "format" d'une donnée pour éviter les requêtes SQL inutiles
const validateRegistration = [
  body("firstName").notEmpty().isString(),
  body("lastName").notEmpty().isString(),
  body("date").notEmpty().isDate(),
  body("sex").isString(),
  body("email").isEmail(),
  body("password").isLength({ min: 8 }),
];

const verifUser = [
  body("email").isEmail(),
  body("password").isLength({ min: 8 }),
];



router.get("/register", userController.showRegister);
router.post("/register", validateRegistration, userController.register); // lorsqu'on va aller sur localhost/companies: le serveur doit exécuter le controler getCompanies

//login

router.get("/login", userController.showLogin);
router.post("/login", verifUser, userController.login);

module.exports = router;
