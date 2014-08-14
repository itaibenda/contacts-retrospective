'use strict';

require('../lib/matchers.protractor.js');
var MainPage = require('../pages/main-page.js');

describe('contactsRetrospectiveApp Main Page', function () {
  var mainPage;

  beforeEach(function () {
    mainPage = new MainPage();
    browser.addMockModule('contactsRetrospectiveAppMocks', function () {});
  });

  afterEach(function () {
    browser.removeMockModule('contactsRetrospectiveAppMocks');
  });

  it('should load successfully', function () {
    mainPage.navigate();
    expect(mainPage.getTitle().getText()).toEqual('Enjoy coding! - Yeoman');
  });

});
