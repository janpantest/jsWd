const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js',
    googleInputPage: './pages/googleInput.js',
    googleResultsPage: './pages/googleResults.js',
    valmezHomePage: './pages/valmezHome.js',
    valmezVedeniMestaPage: './pages/valmezVedeniMesta.js',
    valmezVedeniMestaDetailPage: './pages/valmezVedeniMestaDetail.js',
    idnesHomePage: './pages/idnesHome.js',
    idnesBrnoPage: './pages/idnesBrno.js',
    idnesZlinPage: './pages/idnesZlin.js',
    kzvalmezPage: './pages/kzvalmez.js',
  },
  bootstrap: null,
  mocha: {},
  name: '2',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },  
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}