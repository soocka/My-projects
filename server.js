/***********************
 * IMPORT DES MODULES *
 ************************/

const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const config = require("./config.json");
const pug = require("pug");
const companiesRouter = require("./routers/companies.router");
const usersRouter = require("./routers/users.router");
const advertisementsRouter = require("./routers/advertisements.router");
const job_applicationsRouter = require("./routers/job_applications.router");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const viewAdminRouter = require("./routers/viewAdmin.router");

/***********************
 * VARIABLES GLOBALES *
 ************************/

const app = express();
const port = config.port;

/***********************
 * MIDDLEWARES *
 ************************/

app.use(express.json()); // analyse les corps des requêtes entrantes pour extraire les données json
app.use(express.urlencoded({ extended: false })); // vérifie que les requêtes arrivent au format encodé
app.use(express.static("public")); // tous les contenus "médias" dans le dossier "public"
app.use(morgan("dev")); // pour l'activer
app.set("views", "./public/views");
app.set("view engine", "pug");
// app.use(bodyParser.urlencoded({ extended: true }));

/**********
 * ROUTAGE*
 **********/

app.use("/companies/", companiesRouter);
app.use("/users/", usersRouter);
app.use("/advertisements/", advertisementsRouter);
app.use("/job_applications/", job_applicationsRouter);
app.use("/viewAdmin/", viewAdminRouter)

/***********************
 * TRAITEMENT *
 ************************/

app.listen(port, () => console.log(`Started port: ${port} ! `)); // avoir un visu du lancement du serveur
