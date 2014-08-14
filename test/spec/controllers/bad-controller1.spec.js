'use strict';

describe('Controller: BadController1Controller', function () {

  // load the controller's module
  beforeEach(function () {
    module('contactsRetrospectiveAppInternal');

    //add your mocks here
  });

  var BadController1Controller, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BadController1Controller = $controller('BadController1Controller', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the controller', function () {
    expect(BadController1Controller.awesomeThings.length).toBe(6);
  });
});
