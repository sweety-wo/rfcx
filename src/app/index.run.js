(function() {
  'use strict';

  angular
    .module('rfcx')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
