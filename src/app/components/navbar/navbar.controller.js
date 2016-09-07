(function() {
  'use strict';

  angular
    .module('angularBoilerplate')
    .controller('NavbarController', NavbarController);

  /** @ngInject */
  function NavbarController() {
    var vm = this;

    vm.date = new Date();
  }
})();
