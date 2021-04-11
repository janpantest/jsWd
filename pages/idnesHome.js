const { I } = inject();

class IdnesHome {

  // insert your locators and methods here
  locators = {
    cookiesBanner: "//div[@id='onetrust-banner-sdk']",
    acceptButton: "//button[@id='onetrust-accept-btn-handler']",
    krajeBrno: "(//a[@href='https://www.idnes.cz/brno'])[1]",
    // krajeBrno: "(//a[contains(text(), 'Brno')])[1]",
    // kraje: "(//li/a[@href='https://www.idnes.cz/kraje'])[2]",
    kraje: "(//li/a[@score-id='kraje'])[1]"
  }

  clickAcceptCookies() {
    I.seeInTitle('iDNES.cz')

    if (I.seeElement(this.locators.cookiesBanner)) {
      I.click(this.locators.acceptButton)
    }
  }

  clickLinkBrno() {
    I.seeInTitle('iDNES.cz')
    I.waitForElement(this.locators.kraje);
    I.moveCursorTo(this.locators.kraje);
    // I.click(this.locators.kraje)
    // I.waitForClickable(this.locators.krajeBrno);
    I.click(this.locators.krajeBrno);
    I.seeInTitle('Brno')
  }
  
}

module.exports = new IdnesHome;