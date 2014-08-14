'use strict';

describe('Controller: GoodController1Controller', function () {

  // load the controller's module
  beforeEach(function () {
    module('contactsRetrospectiveAppInternal');

    //add your mocks here
  });

  var GoodController1Controller, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GoodController1Controller = $controller('GoodController1Controller', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the controller', function () {
    expect(GoodController1Controller.awesomeThings.length).toBe(6);
  });
});
