const assert = require('assert');

const LoginPage = require('./pages/login.page');
const DashboardPage = require('./pages/dashboard.page');
const ProfilePage = require('./pages/profile.page');

describe('React Native App Tests', () => {  
    it('should login successfully', async () => {
      await LoginPage.login('testUser', 'password123');

      await DashboardPage.waitForLoad();

      const headerText = await DashboardPage.getHeaderText();
      console.log('<<headerText: ', headerText);
      assert.strictEqual(headerText, 'Dashboard');
    });
  
    it('should load dashboard and display profile', async () => {
      await DashboardPage.waitForLoad();
      const info = await DashboardPage.getProfileInfo();
      assert.strictEqual(info.name, 'Name: John Doe');
      assert.strictEqual(info.email, 'Email: john.doe@example.com');
  
      await DashboardPage.goToProfile();
    });
  
    it('should display profile details correctly', async () => {
      await ProfilePage.waitForLoad();
      const details = await ProfilePage.getProfileDetails();
      assert.strictEqual(details.age, 'Age: 30');
      assert.strictEqual(details.phone, 'Phone: +1 555 123 4567');
      assert.strictEqual(details.address, 'Address: 123 Main Street, Springfield');
    });
});