'use strict';

describe('Service: goodDataService', function () {

  // load the service's module
  beforeEach(function () {
    module('contactsRetrospectiveAppInternal');

    //add your mocks here
  });

  // instantiate service
  var goodDataService;
  beforeEach(inject(function (_goodDataService_) {
    goodDataService = _goodDataService_;
  }));

  it('should do something', function () {
    expect(goodDataService.someMethod()).toBe(42);
  });

});
