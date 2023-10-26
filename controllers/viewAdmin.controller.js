const config = require("../config.json");
const bdd = require("../conn_sql");
const Advertisements = require("../models/advertisements.model");

exports.getAdvertisements = async (req, resp) => {
  try {
    const db = await bdd.connection; // déclare une var "db" qui va se co à la bdd grâce au fichier déclaré
    let advertisementsInstance = new Advertisements(db, config);
    let advertisementsList = await advertisementsInstance.getAdvertisements(); // Utilisation de la class pour exécuter la requête

    resp.render("viewAdmin/viewAdmin.pug", { advertisementsList });
  } catch (error) {
    console.error(error);
  }
};

exports.deleteAdvertisement = async (req, resp) => {
  try {
    const advertisementID = req.params.id;
    const db = await bdd.connection;
    let advertisementsInstance = new Advertisements(db, config);
    let result = await advertisementsInstance.deleteAdvertisements(advertisementID);
    resp.json(result)
  } catch (error) {
    console.error(error);
  }
};
