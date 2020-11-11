const PasswordVerification = require('../src/passwordVerification');

describe('Verification rules', () => {
  test('should pass by default', () => {
    const passwordVerification = new PasswordVerification('Táb4achtach');
    expect(passwordVerification.verify()).toBe(true);
  });
  test('should fail if 8 characters or less', () => {
    const passwordVerification = new PasswordVerification('Abs0lute');
    expect(() => { passwordVerification.verify(); }).toThrow('Password should be larger than 8 characters');
  });
  test('should fail if password is null', () => {
    const passwordVerification = new PasswordVerification();
    expect(() => { passwordVerification.verify(); }).toThrow('Password should not be null');
  });
  test('should fail if no uppercase character', () => {
    const passwordVerification = new PasswordVerification('táb4achtach');
    expect(() => { passwordVerification.verify(); }).toThrow('Password should have one uppercase letter at least');
  });
});
