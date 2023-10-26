const config = require("../config.json");
const bdd = require("../conn_sql");
const JobApplications = require("../models/job_applications.model");
const Advertisement = require("../models/advertisements.model");
const jwt = require("jsonwebtoken");

exports.showApplicationsForm = async (req, resp) => {
  try {
    const db = await bdd.connection;
    let advertisementTitleInstance = new Advertisement(db, config);
    let result = await advertisementTitleInstance.getAdvertisementTitle(
      req.params.id
    );

    //Vérifie si le titre est un tableau pour retirer : "titre": + {}

    if (Array.isArray(result) && result.length > 0) {
      const advertisementTitle = result[0].Title;
      resp.render("job_applications/job_applications.pug", {
        advertisementTitle,
      });
    } else {
      resp.render("job_applications/job_applications.pug", {
        advertisementTitle: "",
      });
    }
  } catch (error) {
    console.error(error);
  }
};

exports.jobApplication = async (req, resp) => {
  try {
    const decodedToken = jwt.verify(req.body.token, "RANDOM_TOKEN_SECRET");

    let apply = {
      advertisementID: req.params.id,
      userID: decodedToken.userID,
      applicationDate: req.body.applicationDate,
      subject: req.body.subject,
      content: req.body.content,
      email: req.body.email,
    };
    const db = await bdd.connection;
    let applyInstance = new JobApplications(db, config);
    applyInstance
      .insertApply(apply)
      .then((result) => {
        console.log(result);
        resp.json(result)
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.error(error);
  }
};
