'use strict';

(function () {

  /* @ngInject */
  function BadController1Controller($scope, badApi) {
    $scope.badApi = badApi.create();

    $scope.badData = $scope.badApi.getResource1();
  }

  angular
    .module('contactsRetrospectiveAppInternal')
    .controller('BadController1Controller', BadController1Controller);

})();
