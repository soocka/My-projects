class JobApplications {
  constructor(_db, _config) {
    (this.db = _db), (this.config = _config);
  }

  async insertApply(apply) {
    try {
      const [rows, fields] = await this.db.execute(
        "INSERT INTO `jobapplications`(`AdvertisementID`, `UserID`, `ApplicationDate`, `Subject`, `Content`, `Email`) VALUES (?,?,?,?,?,?)",
        [
          apply.advertisementID,
          apply.userID,
          apply.applicationDate,
          apply.subject,
          apply.content,
          apply.email,
        ]
      );
      return rows;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = JobApplications;
