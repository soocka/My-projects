const config = require("../config.json");
const bdd = require("../conn_sql");
const Advertisements = require("../models/advertisements.model");
const Companies = require("../models/companies.model");

/********************************************************************
 * MÉTHODES PERMETTANT DE GÉRER LA PASSERELLE ENTRE ROUTER ET MODEL *
 ********************************************************************/

exports.getAdvertisements = async (req, resp) => {
  try {
    const db = await bdd.connection; // déclare une var "db" qui va se co à la bdd grâce au fichier déclaré
    let advertisementsInstance = new Advertisements(db, config);
    let advertisementsList = await advertisementsInstance.getAdvertisements(); // Utilisation de la class pour exécuter la requête

    resp.render("advertisements/advertisements.pug", { advertisementsList });
  } catch (error) {
    console.error(error);
  }
};

exports.showCreateAdvert = async (req, resp) => {
  try {
    const db = await bdd.connection;
    let companiesInstance = new Companies(db, config);
    let companiesList = await companiesInstance.getCompanies();
    resp.render("advertisements/create_advert.pug", {
      companiesList,
    });
  } catch (error) {
    console.error(error);
  }
};

exports.createAdvertisement = async (req, resp) => {
  try {
    const db = await bdd.connection;
    let advertisementsInstance = new Advertisements(db, config);
    let result = await advertisementsInstance.createAdvertisement(req.body);
    resp.json(result);
  } catch (error) {
    console.error(error);
  }
};

exports.showUpdateAdvert = async (req, resp) => {
  try {
    const db = await bdd.connection;
    let companiesInstance = new Companies(db, config);
    let advertisementsInstance = new Advertisements(db, config);
    let advertisement = await advertisementsInstance.getAdvertisement(
      req.params.id
    );
    let formattedDate = new Date(advertisement[0].PostedDate).toISOString().split("T")[0]
    let companiesList = await companiesInstance.getCompanies();
    resp.render("advertisements/update_advert.pug", {
      companiesList,
      advertisement: advertisement[0],
      date: formattedDate,
      companyID: req.params.id
    });
  } catch (error) {
    console.error(error);
  }
};

exports.updateAdvertisement = async (req, resp) => {
  try {
    let advertisement = req.body
    advertisement.advertisementID = parseInt(req.params.id)
    console.log(advertisement)
    const db = await bdd.connection;
    let advertisementsInstance = new Advertisements(db, config);
    let result = await advertisementsInstance.updateAdvertisement(advertisement);
    resp.json(result);
  } catch (error) {
    console.error(error);
  }
};
