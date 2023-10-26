const config = require("../config.json");
const bdd = require("../conn_sql");
const Companies = require("../models/companies.model");

/********************************************************************
 * MÉTHODES PERMETTANT DE GÉRER LA PASSERELLE ENTRE ROUTER ET MODEL *
 ********************************************************************/

exports.getCompanies = async (req, resp) => {
  try {
    const db = await bdd.connection; // déclare une var "db" qui va se co à la bdd grâce au fichier déclaré
    let companiesInstance = new Companies(db, config);
    let companiesList = await companiesInstance.getCompanies(); // Utilisation de la class pour exécuter la requête

    resp.render("companies/companies.pug", { companiesList });
  } catch (error) {
    console.error(error);
  }
};