'use strict';

(function () {

  /* @ngInject */
  function BadController2Controller($scope) {
    $scope.badData2 = $scope.badApi.getResource2();
  }

  angular
    .module('contactsRetrospectiveAppInternal')
    .controller('BadController2Controller', BadController2Controller);

})();
