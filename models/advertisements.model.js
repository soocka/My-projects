class Advertisements {
  constructor(_db, _config) {
    (this.db = _db), (this.config = _config);
  }
  // Requête récupérant la liste des annonces
  async getAdvertisements() {
    try {
      const [rows, fields] = await this.db.execute(
        "SELECT * FROM `advertisements`"
      );
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async getAdvertisement(id) {
    try {
      const [rows, fields] = await this.db.execute(
        "SELECT * FROM `advertisements` WHERE AdvertisementID = ?",
        [id]
      );
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async getAdvertisementTitle(id) {
    try {
      const [rows, fields] = await this.db.execute(
        "SELECT Title FROM advertisements WHERE AdvertisementID = ?",
        [id]
      );
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async deleteAdvertisements(advertisementID) {
    try {
      const [rows, fields] = await this.db.execute(
        "DELETE FROM `advertisements` WHERE advertisementID = ?",
        [advertisementID]
      );
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async createAdvertisement(advertisement) {
    try {
      const [rows, fields] = await this.db.execute(
        "INSERT INTO `advertisements`(`CompanyID`, `Title`, `Description`, `Full_description`, `PostedDate`, `Type`, `Wages`, `Place`) VALUES (?,?,?,?,?,?,?,?)",
        [
          advertisement.company,
          advertisement.title,
          advertisement.shortDescription,
          advertisement.longDescription,
          advertisement.date,
          advertisement.type,
          advertisement.wages,
          advertisement.place,
        ]
      );
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async updateAdvertisement(advertisement) {
    try {
      const [rows, fields] = await this.db.execute(
        "UPDATE `advertisements` SET `CompanyID`=?,`Title`=?,`Description`=?,`Full_description`=?,`PostedDate`=?,`Type`=?,`Wages`=?,`Place`=? WHERE `AdvertisementID`=?",
        [
          advertisement.company,
          advertisement.title,
          advertisement.shortDescription,
          advertisement.longDescription,
          advertisement.date,
          advertisement.type,
          advertisement.wages,
          advertisement.place,
          advertisement.advertisementID
        ]
      );
      return rows;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Advertisements;
