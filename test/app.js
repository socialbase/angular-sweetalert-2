(function () {
  'use strict';

  angular.module('socialbase.test', ['socialbase.sweetAlert'])
      .controller('TestController', ['$scope', 'SweetAlert', function($scope, SweetAlert) {
        SweetAlert.swal({
          type: 'warning',
          text: 'Teste'
        }).then(function() {
        });
      }]);
})();

