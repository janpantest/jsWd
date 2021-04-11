const { I } = inject();

class GoogleResults {

  // insert your locators and methods here
  locators = {
    // linkVM: "//div/div/cite[contains(text(), 'www.valasskemezirici.cz')]",
    linkVM: "//a/div/cite[contains(text(), 'www.valasskemezirici.cz')]",
    linkIdnes: "//h3[contains(text(), 'iDNES.cz – s námi víte víc')]",
    footer: "//div[@style='visibility: visible;']",
    linkKzvalmez: "//h3[contains(text(), 'Kulturní zařízení Valašského Meziříčí')]"
  }

  clickLink() {
    I.seeInTitle('valmez');
    I.click(this.locators.linkVM);
  }

  clickLinkIdnes() {
    I.seeInTitle('idnes');
    I.click(this.locators.linkIdnes)
  } 

  async grabbing() {
    let slovo = await I.grabTextFrom(this.locators.footer);
    slovo = slovo.split(' ');
    console.log(`tohle je splitovany vysledek: ${slovo}`)
    slovo = slovo[7];
    console.log(`hledany text je >>> ${slovo} <<<`)
    return slovo;
  }

  clickKzvalmez() {
    I.seeInTitle('kzvalmez');
    I.click(this.locators.linkKzvalmez);

  }
}

module.exports = new GoogleResults;
