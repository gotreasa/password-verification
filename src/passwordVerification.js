class PasswordVerification {
  constructor(password) {
    this.password = password;
  }

  verify() {
    if (this.password.length <= 8) {
      throw new Error('Password should be larger than 8 characters');
    }
    return true;
  }
}

module.exports = PasswordVerification;