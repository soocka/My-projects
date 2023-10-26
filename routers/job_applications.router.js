const express = require("express");
const jobApplicationsController = require("../controllers/job_applications.controller");
const router = express.Router();

router.get('/:id', jobApplicationsController.showApplicationsForm);
router.post('/:id', jobApplicationsController.jobApplication)

module.exports = router

