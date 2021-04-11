const { I } = inject();

class KzValmez {

  // insert your locators and methods here
    // insert your locators and methods here
    locators = {
      menu: "//span[@class='kz-icon kz-icon-kz']",
      mklublink: "//span[./text()='M-klub']"
    }
  
    clickMklubLink() {
      I.seeInTitle('Kulturní zařízení');
      I.moveCursorTo(this.locators.menu);
      I.waitForClickable(this.locators.mklublink);
      I.click(this.locators.mklublink);
    }
}

module.exports = new KzValmez;
