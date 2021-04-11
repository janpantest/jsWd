const { I } = inject();

class ValmezVedeniMestaDetail {

  // insert your locators and methods here
  locators = {
    kontakty: "//dl/dt",
    jmena: "//div[@class='utvary']",
  }

  async grabJmena() {
    I.seeInTitle('Vedení města 2018');
    let names = await I.grabTextFrom(this.locators.jmena);
    console.log(`Jmena jsou: \n ${names}`)
  }
}

module.exports = new ValmezVedeniMestaDetail;