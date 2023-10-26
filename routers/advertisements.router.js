const express = require("express");
const advertisementsController = require("../controllers/advertisements.controller");

const router = express.Router();

router.get("/", advertisementsController.getAdvertisements); // lorsqu'on va aller sur localhost/companies: le serveur doit exécuter le controler getCompanies

router.get("/create", advertisementsController.showCreateAdvert);
router.post("/create", advertisementsController.createAdvertisement);
router.get("/update/:id", advertisementsController.showUpdateAdvert);
router.put("/update/:id", advertisementsController.updateAdvertisement);

module.exports = router;
