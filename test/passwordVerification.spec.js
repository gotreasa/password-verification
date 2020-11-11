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
});