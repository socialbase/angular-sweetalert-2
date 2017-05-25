'use strict';

angular.module('socialbase.sweetAlert', [])
  .factory('SweetAlert', ['$window', function SweetAlert($window) {
    var $swal = $window;

    return {
      swal: swal
    }

    function swal() {
      return $swal.swal.apply($swal.swal, arguments);
    }
  }]);
