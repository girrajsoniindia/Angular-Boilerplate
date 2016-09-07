(function () {
    'use strict';

    angular.module('angularBoilerplate').controller('MainController', MainController);
    MainController.$inject = ['$scope'];
    
    function MainController($scope)
    {
		var ac 				= this;
       
		initController();

		function initController()
		{
			$scope.eventSources = [];
		}
	}
		
        

})();
