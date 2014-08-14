'use strict';

(function () {

  /* @ngInject */
  function GoodController2Controller(goodDataService) {
    this.goodData2 = goodDataService.getResource2();
  }

  angular
    .module('contactsRetrospectiveAppInternal')
    .controller('GoodController2Controller', GoodController2Controller);

})();
