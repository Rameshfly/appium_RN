class DashboardPage {
    get header() { return $('~dashboardHeader'); }
    get profileName() { return $('~profileName'); }
    get profileEmail() { return $('~profileEmail'); }
    get viewProfileButton() { return $('~viewProfileButton'); }
  
    async waitForLoad() {
      await driver.pause(3000);
      await this.header.waitForExist({ timeout: 10000 });
      // await this.header.waitForDisplayed({ timeout: 3000 });
    }

    async getHeaderText() {
      await this.header.waitForExist({ timeout: 5000 });
      // await this.header.waitForDisplayed({ timeout: 2000 });
    }
  
    async getProfileInfo() {
      return {
        name: await this.profileName.getText(),
        email: await this.profileEmail.getText()
      };
    }
  
    async goToProfile() {
      await this.viewProfileButton.click();
    }
}
  
module.exports = new DashboardPage();
  