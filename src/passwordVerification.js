class PasswordVerification {
  constructor(password) {
    this.password = password;
  }

  verify() {
    if (!this.password) {
      throw new Error('Password should not be null');
    }
    if (this.password.length <= 8) {
      throw new Error('Password should be larger than 8 characters');
    }
    if (this.password.search(/[A-Z]/g) < 0) {
      throw new Error('Password should have one uppercase letter at least');
    }
    return true;
  }
}

module.exports = PasswordVerification;
