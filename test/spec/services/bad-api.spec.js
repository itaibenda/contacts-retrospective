'use strict';

describe('Service: badApi', function () {

  // load the service's module
  beforeEach(function () {
    module('contactsRetrospectiveAppInternal');

    //add your mocks here
  });

  // instantiate service
  var badApi;
  beforeEach(inject(function (_badApi_) {
    badApi = _badApi_;
  }));

  it('should do something', function () {
    expect(badApi.someMethod()).toBe(42);
  });

});
