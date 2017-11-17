'use strict';

angular.module('socialbase.sweetAlert', [])
  .factory('SweetAlert', ['$window', function SweetAlert($window) {
    var $swal = $window;
    
    return { swal: $swal.swal };

//     return {
//       swal: swal
//     }

//     function swal(config) {
//       return $swal.swal(config);
//     }
  }]);
