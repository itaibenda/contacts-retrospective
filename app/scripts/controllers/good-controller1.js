'use strict';

(function () {

  /* @ngInject */
  function GoodController1Controller(goodDataService) {
    this.goodData1 = goodDataService.getResource1();
  }

  angular
    .module('contactsRetrospectiveAppInternal')
    .controller('GoodController1Controller', GoodController1Controller);

})();
