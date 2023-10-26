class Users {
  constructor(_db, _config) {
    (this.db = _db), (this.config = _config);
  }
  // Requête insérant un utilisateur
  async insertUser(user) {
    try {
      const [rows, fields] = await this.db.execute(
        "INSERT INTO `users`(`FirstName`, `LastName`, `DateOfBirth`, `IsMale`, `Email`, `Password`) VALUES (?,?,?,?,?,?)",
        [
          user.firstName,
          user.lastName,
          user.dateOfBirth,
          user.isMale,
          user.email,
          user.password,
        ]
      );
      return rows;
    } catch (error) {
      throw error;
    }
  }

  // Vérifie si un utilisateur existe avec l'adresse mail et le password
  async findByEmailAndPassword(email, password) {
    try {
      const [rows, fields] = await this.db.execute(
        "SELECT * FROM users WHERE email = ? AND password = ?",
        [email, password]
      );
      return rows;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Users;
