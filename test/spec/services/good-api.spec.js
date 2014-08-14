'use strict';

describe('Service: goodApi', function () {

  // load the service's module
  beforeEach(function () {
    module('contactsRetrospectiveAppInternal');

    //add your mocks here
  });

  // instantiate service
  var goodApi;
  beforeEach(inject(function (_goodApi_) {
    goodApi = _goodApi_;
  }));

  it('should do something', function () {
    expect(goodApi.someMethod()).toBe(42);
  });

});
