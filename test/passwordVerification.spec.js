const PasswordVerification = require('../src/passwordVerification');

describe('Verification rules', () => {
  test('should pass by default', () => {
    const passwordVerification = new PasswordVerification('Táb4achtach');
    expect(passwordVerification.verify()).toBe(true);
  });
  test('should fail if less than 9 characters', () => {
    const passwordVerification = new PasswordVerification('Abs0lute');
    expect(() => { passwordVerification.verify(); }).toThrow('Password should be larger than 8 characters');
  });
});
