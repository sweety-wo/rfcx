(function() {
  'use strict';

  angular
    .module('rfcx')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($scope, $state, toastr) {
    /* for getting logged in to system */
    $scope.fnLogin = function(){
      $state.go('home');
      toastr.success('You have successfully sign in.');
    };
  }
})();
