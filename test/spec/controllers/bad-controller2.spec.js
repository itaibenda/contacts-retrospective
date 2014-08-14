'use strict';

describe('Controller: BadController2Controller', function () {

  // load the controller's module
  beforeEach(function () {
    module('contactsRetrospectiveAppInternal');

    //add your mocks here
  });

  var BadController2Controller, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BadController2Controller = $controller('BadController2Controller', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the controller', function () {
    expect(BadController2Controller.awesomeThings.length).toBe(6);
  });
});
