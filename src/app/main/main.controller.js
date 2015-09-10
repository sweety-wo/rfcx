(function() {
  'use strict';

  angular
    .module('rfcx')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope) {
    /* created object to display navitems */
    $scope.navItems = [
      {title: 'Overview', iconClass: 'icon-home', name:'Overview'},
      {title: 'Order history', iconClass: 'icon-text-document', name:'History'},
      {title: 'Fluid layout', iconClass: 'icon-globe', name:'Fluid layout'},
      {title: 'Icon-nav layout', iconClass: 'icon-area-graph', name:'Icon nav'},
      {title: 'Docs', iconClass: 'icon-list', name:'Docs'},
      {title: 'Light UI', iconClass: 'icon-flash', name:'Light UI'},
    ];

    /* for setting currently active nav item */
    $scope.isActive = 'Icon-nav layout';

    /* handling click of navitems */
    $scope.fnRedirectTo = function(title){
      $scope.isActive = title;
    };
  }
})();
