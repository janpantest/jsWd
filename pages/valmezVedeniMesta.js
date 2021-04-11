const { I } = inject();

class ValmezVedeniMesta {

  // insert your locators and methods here
  locators = {
    linkVedeniMesta: "//strong/a[./text()='Vedení města']"
  }

  clickVedeniMesta() {
    I.seeInTitle('Vedení města')
    I.click(this.locators.linkVedeniMesta);
  }
}

module.exports = new ValmezVedeniMesta;