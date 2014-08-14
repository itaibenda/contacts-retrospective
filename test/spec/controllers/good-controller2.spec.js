'use strict';

describe('Controller: GoodController2Controller', function () {

  // load the controller's module
  beforeEach(function () {
    module('contactsRetrospectiveAppInternal');

    //add your mocks here
  });

  var GoodController2Controller, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GoodController2Controller = $controller('GoodController2Controller', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the controller', function () {
    expect(GoodController2Controller.awesomeThings.length).toBe(6);
  });
});
