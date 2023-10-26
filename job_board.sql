-- phpMyAdmin SQL Dump
-- version 5.2.1-1.fc36
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : dim. 22 oct. 2023 à 20:29
-- Version du serveur : 8.0.32
-- Version de PHP : 8.1.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `job_board`
--

-- --------------------------------------------------------

--
-- Structure de la table `advertisements`
--

CREATE TABLE `advertisements` (
  `AdvertisementID` int NOT NULL,
  `CompanyID` int NOT NULL,
  `Title` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `Description` text COLLATE utf8mb4_general_ci,
  `Full_description` text COLLATE utf8mb4_general_ci NOT NULL,
  `PostedDate` date DEFAULT NULL,
  `Type` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Wages` varchar(10000) COLLATE utf8mb4_general_ci NOT NULL,
  `Place` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `advertisements`
--

INSERT INTO `advertisements` (`AdvertisementID`, `CompanyID`, `Title`, `Description`, `Full_description`, `PostedDate`, `Type`, `Wages`, `Place`) VALUES
(1, 1, 'Opportunité de Développeur Full Stack chez Actemium Lille Digital Solution', '🚀 Rejoignez Actemium Lille Digital Solution en tant que Développeur Full Stack !\r\n\r\n📍 Lille, France\r\n💼 Poste : Développeur Full Stack\r\n\r\n🔥 Apportez votre expertise en développement web et mobile.\r\n\r\n✨ Envoyez votre CV à [adresse e-mail] pour rejoindre une équipe dynamique ! #ActemiumLilleDigital #DéveloppeurFullStack #Opportunité', '🚀 Rejoignez l\'équipe dynamique d\'Actemium Lille Digital Solution en tant que Développeur Full Stack ! 🌐\r\n\r\n📌 Poste : Développeur Full Stack\r\n📍 Lieu : Lille, France\r\n\r\nSi vous êtes passionné par la technologie et que vous souhaitez faire partie d\'une entreprise innovante en pleine croissance, ne cherchez plus ! Actemium Lille Digital Solution offre une opportunité exceptionnelle pour un développeur Full Stack talentueux.\r\n\r\n💼 Votre mission :\r\n\r\n    Concevoir, développer et maintenir des solutions web et mobiles innovantes.\r\n    Collaborer avec une équipe passionnée pour créer des produits de haute qualité.\r\n    Participer à des projets variés, de l\'idée à la livraison.\r\n\r\n📚 Vos compétences :\r\n\r\n    Maîtrise des technologies front-end (HTML, CSS, JavaScript).\r\n    Solide expérience en développement back-end (Node.js, Python, Java, etc.).\r\n    Connaissance des bases de données (SQL, NoSQL).\r\n    Compréhension des architectures cloud (AWS, Azure, GCP).\r\n\r\n🤝 Pourquoi nous rejoindre ?\r\n\r\n    Un environnement de travail collaboratif et stimulant.\r\n    Des opportunités de développement professionnel et de formation continue.\r\n    L\'opportunité de travailler sur des projets innovants dans le secteur industriel.\r\n\r\nRejoignez notre équipe et contribuez à la transformation numérique d\'Actemium Lille Digital Solution !\r\n\r\n📩 Envoyez votre CV et lettre de motivation à  contact@teepee.fr pour postuler. Nous avons hâte de vous rencontrer ! #ActemiumLilleDigital #FullStackDeveloper #OpportunitédEmploi', '2023-10-10', 'CDI', '3.500€ brut/ mois', 'Euratechnologies, 165 Av. de Bretagne, 59000 Lille'),
(2, 2, 'Opportunité de Développeur Web chez Carrefour', '🌟 Rejoignez l\'équipe Carrefour en tant que Développeur Web !\r\n\r\n📍 Lieu : Lille\r\n\r\n🖥️ Mettez en œuvre vos compétences en développement web pour façonner l\'avenir du commerce de détail avec l\'un des leaders mondiaux de l\'industrie. Postulez dès aujourd\'hui ! #Carrefour #DéveloppeurWeb #Opportunité', '🌐 Rejoignez Carrefour en tant que Développeur Web ! 🛒\r\n\r\n📌 Poste : Développeur Web\r\n📍 Lieu : Paris\r\n\r\nCarrefour, l\'une des plus grandes chaînes de distribution dans le monde, recherche un Développeur Web talentueux pour rejoindre notre équipe dynamique. Si vous êtes passionné par la technologie, la créativité et souhaitez contribuer à l\'innovation dans le secteur de la distribution, ne cherchez plus ! Cette opportunité est faite pour vous.\r\n📩 Envoyez votre CV et lettre de motivation à  service-recrutement@carrefour.fr pour postuler. Nous avons hâte de vous rencontrer ! #Carrefour #DéveloppeurWeb #OpportunitédEmploi\r\n\r\n💼 Votre mission :\r\n\r\n    Concevoir, développer et maintenir des sites web et des applications web performantes.\r\n    Collaborer avec les équipes marketing et techniques pour créer des solutions interactives et conviviales.\r\n    Participer à l\'optimisation des performances et à l\'amélioration continue de nos plateformes web.\r\n\r\n📚 Vos compétences :\r\n\r\n    Maîtrise des langages de programmation web (HTML, CSS, JavaScript).\r\n    Expérience avec des frameworks et bibliothèques web (ex : React, Angular, Vue.js).\r\n    Connaissance des outils de développement (ex : Git) et des bases de données.\r\n    Capacité à travailler en équipe, à résoudre des problèmes et à être créatif.\r\n\r\n🤝 Pourquoi nous rejoindre ?\r\n\r\n    L\'opportunité de travailler pour une entreprise de renommée mondiale.\r\n    Un environnement de travail collaboratif et stimulant.\r\n    Des opportunités de développement professionnel et d\'évolution de carrière.\r\n\r\nRejoignez notre équipe et contribuez à façonner l\'avenir du commerce de détail avec Carrefour.', '2023-10-10', 'CDI', '3.600 brut/ mois', '91 Rue Du Faubourg De Béthune, 59000 Lille'),
(3, 3, 'Opportunité d\'Électricien chez EDF', '🔌 Rejoignez EDF en tant qu\'Électricien !\r\n\r\n📍 Lieu : Paris\r\n\r\nEDF, leader mondial de l\'énergie, recherche un Électricien qualifié pour rejoindre notre équipe. Postulez aujourd\'hui pour contribuer à l\'avenir énergétique ! #EDF #Électricien #Opportunité', '⚡ Rejoignez EDF en tant qu\'Électricien ! ⚡\r\n\r\n📌 Poste : Électricien\r\n📍 Lieu : Paris\r\n\r\nEDF, l\'un des leaders mondiaux de l\'énergie, recherche un Électricien qualifié pour renforcer notre équipe dédiée à la fourniture d\'électricité fiable et durable. Si vous êtes passionné par l\'électricité, la sécurité, et souhaitez contribuer à un avenir énergétique plus vert, cette opportunité est faite pour vous.\r\n\r\n💼 Votre mission :\r\n\r\n    Effectuer des opérations d\'installation, d\'entretien et de dépannage électrique.\r\n    Travailler en toute sécurité et en conformité avec les normes et réglementations en vigueur.\r\n    Collaborer avec des équipes multidisciplinaires pour assurer une alimentation électrique fiable.\r\n\r\n📚 Vos compétences :\r\n\r\n    Diplôme d\'électricien ou équivalent.\r\n    Connaissance approfondie des systèmes électriques, des circuits et des normes de sécurité.\r\n    Capacité à lire des plans et des schémas électriques.\r\n    Souci du détail, rigueur et adaptabilité.\r\n\r\n🤝 Pourquoi nous rejoindre ?\r\n\r\n    Contribuez à l\'approvisionnement en énergie sûr et durable.\r\n    L\'opportunité de travailler pour une entreprise de renommée mondiale.\r\n    Des opportunités de développement professionnel et d\'évolution de carrière.\r\n\r\nRejoignez notre équipe et participez à l\'avenir énergétique avec EDF.\r\n\r\n📩 Envoyez votre CV et lettre de motivation à recrutement@edf.fr pour postuler. Nous sommes impatients de vous rencontrer ! #EDF #Électricien #OpportunitédEmploi', '2023-10-03', 'CDD', '2.400 brut/ mois', '6 Rue Juliette Récamier, 75007 Paris'),
(4, 4, 'Opportunité d\'Alternance : Assistant Chef de Projet Marketing chez Renault', '🚗 Devenez Assistant Chef de Projet Marketing en Alternance chez Renault !\r\n\r\n📍 Paris, France\r\n\r\nSaisissez cette opportunité de contribuer aux campagnes marketing innovantes de Renault. Postulez dès aujourd\'hui pour un avenir passionnant ! #Renault #Marketing #Alternance', '🚗 Rejoignez Renault en tant qu\'Assistant Chef de Projet Marketing en Alternance ! 📚\r\n\r\n📌 Poste : Assistant Chef de Projet Marketing\r\n📍 Lieu : Paris, France\r\n\r\nRenault, l\'un des leaders mondiaux de l\'industrie automobile, vous offre une opportunité d\'alternance exceptionnelle pour devenir un acteur clé de notre équipe marketing dynamique. Si vous êtes passionné par le marketing, que vous êtes prêt à acquérir une expérience professionnelle précieuse et à contribuer à notre succès, cette opportunité est faite pour vous.\r\n\r\n💼 Votre mission :\r\n\r\n    Collaborer avec l\'équipe marketing pour la conception et la mise en œuvre de campagnes publicitaires innovantes.\r\n    Participer à la gestion de projets marketing, de l\'idée à la mise en œuvre.\r\n    Contribuer à l\'analyse des données et à l\'optimisation des performances marketing.\r\n\r\n📚 Votre profil :\r\n\r\n    Étudiant(e) en Marketing, Communication ou domaines connexes.\r\n    Créativité, esprit d\'initiative et curiosité.\r\n    Capacité à travailler en équipe et à gérer plusieurs tâches simultanément.\r\n\r\n🤝 Pourquoi nous rejoindre ?\r\n\r\n    Une opportunité de formation professionnelle au sein d\'une entreprise automobile de renommée mondiale.\r\n    Un environnement de travail stimulant où vous pourrez développer vos compétences.\r\n    La possibilité de faire partie intégrante de notre équipe marketing après l\'alternance.\r\n\r\nSaisissez cette opportunité exceptionnelle et contribuez au succès marketing de Renault.\r\n\r\n📩 Envoyez votre CV et lettre de motivation à renault-recrute@renault.fr pour postuler. Nous sommes impatients de découvrir vos talents ! #Renault #Marketing #Alternance', '2023-10-09', 'Contrat d\'Alternance', '/', '23, Boulevard de Courcelles, 75008 Paris - 8ème Arrondissement ');

-- --------------------------------------------------------

--
-- Structure de la table `companies`
--

CREATE TABLE `companies` (
  `CompanyID` int NOT NULL,
  `Name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `Industry` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Description` text COLLATE utf8mb4_general_ci,
  `Email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `companies`
--

INSERT INTO `companies` (`CompanyID`, `Name`, `Industry`, `Description`, `Email`) VALUES
(1, 'Actemium Lille Digital Solution', 'Informatique', 'Actemium Lille Digital Solutions est un éditeur de logiciels dont la vocation est d\'accélérer la transformation digitale des entreprises.', 'contact@teepee.fr'),
(2, 'Carrefour', 'Grande distribution', 'Carrefour est un groupe français du secteur de la grande distribution, pionnier du concept d\'hypermarché en 1963.', 'service-recrutement@carrefour.fr'),
(3, 'EDF', 'Electricité', 'Électricité de France (EDF) est une entreprise publique française de production et de fourniture d\'électricité, détenue à 100% par l\'État français. L\'entreprise est le premier producteur et le premier fournisseur d\'électricité en France et en Europe.', 'recrutement@edf.fr'),
(4, 'Renault', 'Automobiles', 'Renault est une entreprise française de construction automobile, présente dans le monde entier sur les marchés des véhicules particuliers (citadines, familiales et SUV), des utilitaires et des camions.', 'renault-recrute@renault.fr');

-- --------------------------------------------------------

--
-- Structure de la table `jobapplications`
--

CREATE TABLE `jobapplications` (
  `ApplicationID` int NOT NULL,
  `AdvertisementID` int NOT NULL,
  `UserID` int NOT NULL,
  `ApplicationDate` date DEFAULT NULL,
  `Subject` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `Content` text COLLATE utf8mb4_general_ci NOT NULL,
  `Email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `jobapplications`
--

INSERT INTO `jobapplications` (`ApplicationID`, `AdvertisementID`, `UserID`, `ApplicationDate`, `Subject`, `Content`, `Email`) VALUES
(18, 1, 2, '2023-10-22', 'Candidature - poste Développeur Full Stack chez Actemium Lille Digital Solution', 'Bonjour Aurélien, \nje voudrais rejoindre votre équipe.\n\nMerci', 'elise.samsa@actemium.com');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `UserID` int NOT NULL,
  `FirstName` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `LastName` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `DateOfBirth` date DEFAULT NULL,
  `IsMale` tinyint(1) DEFAULT NULL,
  `Email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `Password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `IsAdmin` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`UserID`, `FirstName`, `LastName`, `DateOfBirth`, `IsMale`, `Email`, `Password`, `IsAdmin`) VALUES
(2, 'Elise', 'Samsa', '2001-11-19', 0, 'elise.samsa@actemium.com', '123456', 1),
(8, 'Yann', 'Devaux', '1985-05-19', 1, 'yann.devaux@hotmail.fr', '1598753', NULL),
(9, 'Romain', 'DEVAUX', '1993-12-31', 1, 'romain.devaux@actemium.com', '123456', NULL),
(10, 'Elise', 'Samsa', '2023-10-11', 0, 'sajis@outlook.com', '12345678', NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `advertisements`
--
ALTER TABLE `advertisements`
  ADD PRIMARY KEY (`AdvertisementID`),
  ADD KEY `CompanyID` (`CompanyID`);

--
-- Index pour la table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`CompanyID`);

--
-- Index pour la table `jobapplications`
--
ALTER TABLE `jobapplications`
  ADD PRIMARY KEY (`ApplicationID`),
  ADD KEY `AdvertisementID` (`AdvertisementID`),
  ADD KEY `UserID` (`UserID`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserID`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `advertisements`
--
ALTER TABLE `advertisements`
  MODIFY `AdvertisementID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `companies`
--
ALTER TABLE `companies`
  MODIFY `CompanyID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `jobapplications`
--
ALTER TABLE `jobapplications`
  MODIFY `ApplicationID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `UserID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `advertisements`
--
ALTER TABLE `advertisements`
  ADD CONSTRAINT `advertisements_ibfk_1` FOREIGN KEY (`CompanyID`) REFERENCES `companies` (`CompanyID`);

--
-- Contraintes pour la table `jobapplications`
--
ALTER TABLE `jobapplications`
  ADD CONSTRAINT `jobapplications_ibfk_1` FOREIGN KEY (`AdvertisementID`) REFERENCES `advertisements` (`AdvertisementID`),
  ADD CONSTRAINT `jobapplications_ibfk_2` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
