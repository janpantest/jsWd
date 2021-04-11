Feature('VM');

Scenario('test something', ({ I, googleInputPage, googleResultsPage, valmezHomePage, valmezVedeniMestaPage, valmezVedeniMestaDetailPage }) => {
    // googleInputPage.acceptAgreement();

    // I.switchToPreviousTab(0)
    googleInputPage.acceptPopUp('https://google.com');

    googleInputPage.enterString('valmez')
    googleResultsPage.clickLink();
    valmezHomePage.clickVedeniMesta()
    valmezVedeniMestaPage.clickVedeniMesta()
    valmezVedeniMestaDetailPage.grabJmena()
});

Scenario('google/grabb', async ({ I, googleInputPage, googleResultsPage, idnesHomePage, idnesBrnoPage, idnesZlinPage }) => {
    var assert = require('assert');

    // googleInputPage.checkPage('https://google.com')
    // googleInputPage.acceptCookies();

    googleInputPage.acceptPopUp('https://google.com');

    
    googleInputPage.enterString('idnes');
    // assert.strictEqual(await googleResultsPage.grabbing(), 'adresy');
    
    googleResultsPage.grabbing();
    googleResultsPage.clickLinkIdnes();
    // idnesHomePage.clickAcceptCookies();
    idnesHomePage.clickLinkBrno();
    idnesBrnoPage.clickZlin();
    idnesZlinPage.checkZlin()

});

Scenario('KZvalmez - hover', ({I, kzvalmezPage, googleInputPage, googleResultsPage}) => {
    googleInputPage.acceptPopUp('https://google.com');
    googleInputPage.enterString('kzvalmez');
    googleResultsPage.clickKzvalmez();
    I.wait(3)
    kzvalmezPage.clickMklubLink();
    I.seeInTitle('M-Klub');
    I.wait(5)
})