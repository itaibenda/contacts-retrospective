'use strict';

(function () {
  function GoodApi($resource) {
  }

  GoodApi.prototype.getResource1 = function () {
    return $resource('/some/path/1');
  };

  GoodApi.prototype.getResource2 = function () {
    return $resource('/some/path/2');
  };

  /* @ngInject */
  function goodApiFactory($resource) {
    var goodApi = new GoodApi($resource);

    return goodApi;
  }

  angular
    .module('contactsRetrospectiveAppInternal')
    .factory('goodApi', goodApiFactory);

})();
