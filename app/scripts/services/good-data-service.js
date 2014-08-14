'use strict';

(function () {

  /* @ngInject */
  function GoodDataService(goodApi) {
    var _resource1 = goodApi.getResource1(),
      _resource2 = goodApi.getResource2();

    this.getResource1 = function () {
      return _resource1;
    };

    this.getResource2 = function () {
      return _resource2;
    };

    this.addSomethingToResource2 = function (something) {
      _resource2.items.push(something);
      this.triggerOnResource2Update();
    };
  }

  angular
    .module('contactsRetrospectiveAppInternal')
    .service('goodDataService', GoodDataService);

})();
