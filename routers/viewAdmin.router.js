const express = require("express");
const viewAdminController = require("../controllers/viewAdmin.controller");
const advertisementsController = require("../controllers/advertisements.controller");

const router = express.Router();

router.get("/", viewAdminController.getAdvertisements)
router.delete("/:id", viewAdminController.deleteAdvertisement);

module.exports = router