const config = require("../config.json");
const bdd = require("../conn_sql");
const Users = require("../models/users.model");
const jwt = require("jsonwebtoken");

/********************************************************************
 * MÉTHODES PERMETTANT DE GÉRER LA PASSERELLE ENTRE ROUTER ET MODEL *
 ********************************************************************/

exports.register = async (req, resp) => {
  try {
    let user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateOfBirth: req.body.date,
      isMale: parseInt(req.body.sex),
      email: req.body.email,
      password: req.body.password,
    };
    const db = await bdd.connection; // déclare une var "db" qui va se co à la bdd grâce au fichier déclaré
    let userInstance = new Users(db, config);
    userInstance
      .insertUser(user)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.error(error);
  }
};

exports.login = async (req, resp) => {
  try {
    const db = await bdd.connection;
    let userInstance = new Users(db, config);
    let login = {
      email: req.body.email,
      password: req.body.password,
    };

    const userByEmailAndPassword = await userInstance.findByEmailAndPassword(
      login.email,
      login.password
    );

    if (userByEmailAndPassword.length === 0) {
      resp.json({ message: "Informations de connexion incorrectes." });
      return;
    }

    let user = userByEmailAndPassword[0];

    // Création d'un token
    const userData = {
      userID: user.UserID,
      token: jwt.sign({ userID: user.UserID }, "RANDOM_TOKEN_SECRET", {
        expiresIn: "2h",
      }),
    };

    if (user.IsAdmin === 1) {
      userData.isAdmin = true;
    }

    resp.json(userData);
  } catch (error) {
    console.error(error)
  }
};

// va afficher la page d'inscription
exports.showRegister = async (req, resp) => {
  resp.render("users/register.pug");
};

exports.showLogin = (req, resp) => {
  resp.render("users/login.pug");
};
