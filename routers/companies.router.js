const express = require("express");
const companiesController = require("../controllers/companies.controller");

const router = express.Router();

router.get("/", companiesController.getCompanies) // lorsqu'on va aller sur localhost/companies: le serveur doit exécuter le controler getCompanies

module.exports = router