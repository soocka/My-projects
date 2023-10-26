class Companies {
  constructor(_db, _config) {
    (this.db = _db), (this.config = _config);
  }
  // Requête récupérant la liste des titres
  async getCompanies() {
    try {
      const [rows, fields] = await this.db.execute("SELECT * FROM `companies`");
      return rows;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Companies;

