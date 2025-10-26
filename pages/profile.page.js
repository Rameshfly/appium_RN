class ProfilePage {
    get header() { return $('~profileHeader'); }
    get age() { return $('~profileAge'); }
    get phone() { return $('~profilePhone'); }
    get address() { return $('~profileAddress'); }
  
    async waitForLoad() {
      await this.header.waitForExist({ timeout: 5000 });
      // await this.header.waitForDisplayed({ timeout: 3000 });
    }
  
    async getProfileDetails() {
      return {
        age: await this.age.getText(),
        phone: await this.phone.getText(),
        address: await this.address.getText()
      };
    }
}
  
module.exports = new ProfilePage();
  